import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name,
            phone,
            email,
            location,
            registration,
            model,
            carteGrise,
            etat,
            comment,
        } = body;

        const { data, error } = await resend.emails.send({
            from: "CASSE-VHU <contact@casse-vhu.fr>",
            to: "contact@casse-vhu.fr",
            subject: "Nouveau message du formulaire de contact",
            html: `
        <p><strong>Nom & Prénom:</strong> ${name}</p>
        <p><strong>Numéro de téléphone:</strong> ${phone}</p>
        <p><strong>Adresse Mail:</strong> ${email}</p>
        <p><strong>Lieu de l'enlèvement du véhicule:</strong> ${location}</p>
        <p><strong>Immatriculation du véhicule:</strong> ${registration}</p>
        <p><strong>Modèle du Véhicule:</strong> ${model}</p>
        <p><strong>Statut de la carte grise:</strong> ${carteGrise}</p>
        <p><strong>Etat du véhicule:</strong> ${etat}</p>
        <p><strong>Commentaire:</strong> ${comment}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
