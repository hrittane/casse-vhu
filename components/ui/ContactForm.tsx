"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [registration, setRegistration] = useState("");
    const [model, setModel] = useState("");
    const [carteGrise, setCarteGrise] = useState("Statut de la carte grise");
    const [etat, setEtat] = useState("Etat du véhicule");
    const [comment, setComment] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify({
                name,
                phone,
                email,
                location,
                registration,
                model,
                carteGrise,
                etat,
                comment,
            }),
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
            <div className="text-center m-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Obtenez votre devis gratuit</h3>
                <p className="text-muted-foreground">
                    Remplissez ce formulaire et nous vous contacterons rapidement
                </p>
            </div>
            <div className="p-6 pt-0">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input
                        placeholder="Nom & Prénom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder="Numéro de téléphone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Input
                        placeholder="Adresse Mail"
                        className="md:col-span-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Lieu de l'enlèvement du véhicule"
                        className="md:col-span-2"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <Input
                        placeholder="Immatriculation du véhicule"
                        value={registration}
                        onChange={(e) => setRegistration(e.target.value)}
                    />
                    <Input
                        placeholder="Modèle du Véhicule"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                    <div>
                        <select
                            value={carteGrise}
                            onChange={(e) => setCarteGrise(e.target.value)}
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option>Statut de la carte grise</option>
                            <option>CG à jour</option>
                            <option>CG barrée</option>
                            <option>CG perdu</option>
                            <option>Autre cas</option>
                        </select>
                    </div>
                    <div>
                        <select
                            value={etat}
                            onChange={(e) => setEtat(e.target.value)}
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option>Etat du véhicule</option>
                            <option>Véhicule roulant</option>
                            <option>Véhicule en panne</option>
                            <option>Véhicule accidenté</option>
                            <option>Véhicule incomplet</option>
                        </select>
                    </div>
                </div>
                <Textarea
                    placeholder="Commentaire"
                    className="mt-4 min-h-[100px] md:col-span-2"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <div className="flex items-center p-6 pt-0">
                <Button type="submit" className="w-full">
                    Valider
                </Button>
            </div>
        </form>
    );
}