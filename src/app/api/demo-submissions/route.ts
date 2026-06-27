import { NextResponse } from "next/server";
import {
  DemoSubmissionInput,
  getDemoSubmissions,
  saveDemoSubmission,
} from "@/lib/demo-submissions";

export const runtime = "nodejs";

function isAuthorized(request: Request) {
  const secret = request.headers.get("x-admin-secret");
    
  return secret === process.env.ADMIN_SECRET;
}

function isValidSubmission(body: unknown): body is DemoSubmissionInput {
  if (!body || typeof body !== "object") {
    return false;
  }

  const candidate = body as Record<string, unknown>;

  return (
    typeof candidate.fullName === "string" &&
    candidate.fullName.trim().length > 0 &&
    typeof candidate.phone === "string" &&
    candidate.phone.trim().length > 0 &&
    typeof candidate.agencyName === "string" &&
    candidate.agencyName.trim().length > 0 &&
    typeof candidate.location === "string" &&
    candidate.location.trim().length > 0 &&
    typeof candidate.plan === "string" &&
    candidate.plan.trim().length > 0 &&
    Array.isArray(candidate.contactMethods) &&
    candidate.contactMethods.every((method) => typeof method === "string") &&
    (candidate.message === undefined || typeof candidate.message === "string")
  );
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!isValidSubmission(body) || body.contactMethods.length === 0) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const result = saveDemoSubmission(body);

  return NextResponse.json(
    { success: true, id: result.id },
    { status: 201 }
  );
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const submissions = getDemoSubmissions();

  return NextResponse.json(submissions);
}