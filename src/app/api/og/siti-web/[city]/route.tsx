import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { getLocationBySlug } from '@/data/locations';
import { assignArchetype, getArchetype } from '@/data/archetypes';

export const runtime = 'edge';

const COLORS = {
  background: '#1a1a2e',
  text: '#ffffff',
  accent: '#e94560',
  card: '#16213e',
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ city: string }> }
) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  
  if (!location) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.background,
            color: COLORS.text,
            fontSize: 48,
            fontWeight: 800,
          }}
        >
          Città non trovata
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  const archetype = assignArchetype(location);
  const archetypeData = getArchetype(archetype);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: COLORS.background,
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '90%',
          }}
        >
          <span
            style={{
              color: COLORS.accent,
              fontSize: 24,
              fontWeight: 600,
              marginBottom: 20,
              textTransform: 'uppercase',
              letterSpacing: 4,
            }}
          >
            Siti Web
          </span>
          
          <h1
            style={{
              color: COLORS.text,
              fontSize: 80,
              fontWeight: 800,
              margin: 0,
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            {location.name}
          </h1>
          
          <span
            style={{
              color: '#8892b0',
              fontSize: 28,
              marginBottom: 30,
            }}
          >
            {location.province}
          </span>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 24px',
              backgroundColor: COLORS.card,
              borderRadius: 8,
              marginBottom: 30,
            }}
          >
            <span style={{ color: COLORS.text, fontSize: 22 }}>
              {archetypeData.name}
            </span>
          </div>
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <span style={{ color: '#8892b0', fontSize: 24 }}>
            manueldeceglie.it
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
