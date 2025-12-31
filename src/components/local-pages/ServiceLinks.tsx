import Link from "next/link";
import { ArrowRight, Database, Smartphone, Globe } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Card } from "@/components/ui/card";

interface ServiceLink {
  label: string;
  href: string;
  city: string;
}

interface ServiceLinksProps {
  city: string;
  services: ServiceLink[];
  delay?: number;
}

export default function ServiceLinks({ city, services, delay = 0 }: ServiceLinksProps) {
  const getIcon = (service: string) => {
    if (service.toLowerCase().includes("gestionali")) return Database;
    if (service.toLowerCase().includes("app")) return Smartphone;
    return Globe;
  };

  return (
    <BlurFade delay={delay}>
      <Card className="p-6 rounded-2xl border-2 bg-gradient-to-br from-blue-50 via-background to-primary/[0.02]">
        <h3 className="font-bold text-xl mb-6">
          Altri servizi a {city}
        </h3>
        
        <div className="space-y-3">
          {services.map((service, index) => {
            const Icon = getIcon(service.label);
            return (
              <Link
                key={index}
                href={service.href}
                className="flex items-center justify-between p-4 rounded-xl bg-background border-2 hover:border-primary/30 hover:bg-primary/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold">{service.label}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t text-center">
          <Link
            href="/chi-sono"
            className="text-primary font-medium hover:underline inline-flex items-center gap-1"
          >
            Scopri chi sono
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Card>
    </BlurFade>
  );
}
