import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { getLocationBySlug } from '@/data/locations';
import { assignArchetype } from '@/data/archetypes';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    return new Response('City not found', { status: 404 });
  }

  const archetype = assignArchetype(location);
  
  const title = `Software Gestionali a ${location.name}`;
  const subtitle = archetype === 'MetroBologna' 
    ? 'Digitalizza la tua impresa nell\'area bolognese'
    : archetype === 'IndustrialHub'
    ? 'Software su misura per il settore industriale'
    : archetype === 'FoodValley'
    ? 'Gestionali per aziende food e artigiani del gusto'
    : 'Software personalizzato per la tua attività';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0a0a0a 100%)',
          fontSize: 64,
          fontWeight: 700,
          textAlign: 'center',
          padding: '80px',
        }}
      >
        {/* Background elements */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '200px',
            backgroundColor: '#FFBC11',
            borderRadius: '50%',
            filter: 'blur(100px)',
            opacity: 0.2,
          }}
        />
        
        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '16px 32px',
            borderRadius: '9999px',
            marginBottom: '40px',
            border: '1px solid rgba(255,188,17,0.3)',
          }}
        >
          <span style={{ color: '#FFBC11', fontSize: 24, fontWeight: 600 }}>
            Software Gestionale
          </span>
        </div>

        {/* Main Title */}
        <h1
          style={{
            background: 'linear-gradient(to bottom, #ffffff 0%, #cccccc 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 72,
            fontWeight: 800,
            marginBottom: '24px',
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: '#9ca3af',
            fontSize: 32,
            fontWeight: 400,
            marginBottom: '48px',
            maxWidth: '80%',
          }}
        >
          {subtitle}
        </p>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            backgroundColor: '#FFBC11',
            padding: '20px 48px',
            borderRadius: '9999px',
          }}
        >
          <span style={{ color: '#000000', fontSize: 28, fontWeight: 700 }}>
            Scopri di più
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#6b7280',
            fontSize: 20,
          }}
        >
          <span>manueldeceglie.it</span>
          <span>•</span>
          <span>{location.province}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
