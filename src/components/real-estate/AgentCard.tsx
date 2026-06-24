import { Mail, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Agent } from "@/lib/real-estate-template";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
  className?: string;
}

export function AgentCard({ agent, className }: AgentCardProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-[var(--radius-card)] border border-light-border bg-surface-container-lowest shadow-low",
        className
      )}
    >
      <div className="aspect-[5/4] overflow-hidden bg-surface-container">
        <div
          role="img"
          aria-label={agent.name}
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${agent.image})` }}
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-on-surface">
              {agent.name}
            </h3>
            <p className="mt-1 text-sm text-on-surface-variant">
              {agent.role}
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-sm font-semibold text-accent-foreground">
            <Star className="size-3.5 fill-accent text-accent" aria-hidden="true" />
            {agent.rating}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-cream p-4">
          <div>
            <p className="text-xs uppercase text-on-surface-variant">Area</p>
            <p className="mt-1 text-sm font-semibold text-on-surface">
              {agent.location}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-on-surface-variant">Closed</p>
            <p className="mt-1 text-sm font-semibold text-on-surface">
              {agent.dealsClosed} Deals
            </p>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <Button variant="primary" className="flex-1">
            <Phone aria-hidden="true" />
            Call
          </Button>
          <Button variant="outline" size="icon" aria-label={`Email ${agent.name}`}>
            <Mail aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  );
}
