import { LocalCityLink } from "@/data/local-pages/types";
import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LocalCityLinksProps {
  currentCity: string;
  currentProvince: string;
  allCities: LocalCityLink[];
  delay?: number;
}

export default function LocalCityLinks({ currentCity, currentProvince, allCities, delay = 0 }: LocalCityLinksProps) {
  const sameProvinceCities = allCities.filter(city => 
    city.province === currentProvince && city.slug !== currentCity
  );

  const nearbyProvinces = allCities.filter(city => 
    city.province !== currentProvince && city.slug !== currentCity
  ).slice(0, 3);

  return (
    <BlurFade delay={delay}>
      <div className="space-y-8">
        {sameProvinceCities.length > 0 && (
          <Card className="p-6 rounded-2xl border-2 bg-muted/30">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-lg">
                Anche nella provincia di {currentProvince}
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {sameProvinceCities.map(city => (
                <Link
                  key={city.slug}
                  href={`/siti-web-${city.slug}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-background border hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <span className="font-medium text-sm">{city.cityName}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </Card>
        )}

        {nearbyProvinces.length > 0 && (
          <Card className="p-6 rounded-2xl border-2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-lg">
                Anche nelle province vicine
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {nearbyProvinces.map(city => (
                <Link
                  key={city.slug}
                  href={`/siti-web-${city.slug}`}
                  className="flex flex-col p-3 rounded-lg bg-background border hover:border-primary/30 hover:bg-primary/5 transition-all group text-center"
                >
                  <span className="font-medium text-sm">{city.cityName}</span>
                  <span className="text-xs text-muted-foreground mt-0.5">{city.province}</span>
                </Link>
              ))}
            </div>
          </Card>
        )}

        <Card className="p-6 rounded-2xl border-2 bg-gradient-to-br from-primary/5 to-background">
          <div className="text-center space-y-4">
            <h3 className="font-bold text-lg">
              Non trovi la tua città?
            </h3>
            <p className="text-sm text-muted-foreground">
              Offro servizi di sviluppo <Link href="/siti-web" className="text-primary hover:underline">siti web</Link> in tutta l&apos;Emilia-Romagna e anche da remoto. Contattami per un preventivo personalizzato.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/#contact">
                Richiedi Preventivo
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </BlurFade>
  );
}
