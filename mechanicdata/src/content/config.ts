import { defineCollection, z } from 'astro:content';

const codesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    code: z.string(),
    description: z.string(),
    category: z.enum([
      'Moteur',
      'Transmission',
      'Emission',
      'Allumage',
      'Carburant',
      'Capteurs',
      'Airbag',
      'ABS',
      'Autre'
    ]),
    severity: z.enum(['Faible', 'Moyen', 'Élevé', 'Critique']),
    symptoms: z.array(z.string()),
    causes: z.array(z.string()),
    solutions: z.array(z.string()),
    relatedCodes: z.array(z.string()).optional(),
    publishDate: z.date(),
  }),
});

export const collections = {
  'codes': codesCollection,
};
