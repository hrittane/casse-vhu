import { NextResponse } from 'next/server';
import zones from '../../data/zones.json';
import blogPosts from '../../data/blog/index.json';

export const dynamic = 'force-dynamic';

export async function GET() {
    const baseUrl = 'https://www.casse-vhu.fr';

    const sections = [
        `# Casse-VHU : Service d'Enlèvement d'Épaves Gratuit`,

        `## Description`,
        `Casse-VHU est votre épaviste agréé VHU (Véhicule Hors d'Usage) pour un service rapide, gratuit et 100% conforme en France. Nous assurons la prise en charge complète des démarches administratives, la dépollution et le recyclage de votre véhicule.`,

        `## Nos Services`,
        `- **Enlèvement Gratuit** : Intervention sous 24-48h partout en France.`,
        `- **Démarches Administratives** : Gestion du certificat de destruction et déclaration en préfecture (Cerfa n°15776*02).`,
        `- **Centre Agréé** : Recyclage et dépollution dans un centre VHU agréé respectant les normes environnementales.`,
        `- **Tous Véhicules** : Voitures particulières, utilitaires, motos, scooters, quads, camping-cars, poids lourds.`,
        `- **Tous États** : Accidenté, brûlé, inondé, moteur HS, sans contrôle technique.`,

        `## Zones d'Intervention`,
        `Nous intervenons partout en France. Voici les principales zones couvertes :`,

        `### Régions`,
        zones.Région.map(r => `- ${r}`).join('\n'),

        `### Départements`,
        zones.Département.map(d => `- ${d}`).join('\n'),

        `### Grandes Communes`,
        zones['Grandes communes'].map(c => `- ${c}`).join('\n'),

        `## Ressources et Guides (Blog)`,
        `Retrouvez nos conseils et informations réglementaires :`,
        blogPosts.map(post => `- [${post.title}](${baseUrl}/blog/${post.slug}) : ${post.excerpt}`).join('\n'),

        `## Contact`,
        `- **Téléphone** : 06 30 30 20 53`,
        `- **Email** : contact@casse-vhu.fr`,
        `- **Site Web** : ${baseUrl}`,
        `- **Formulaire en ligne** : ${baseUrl}#contact`
    ];

    const content = sections.join('\n\n');

    return new NextResponse(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}