export const site = {
	name: 'Marcelo Bruzetti',
	role: 'Senior Software Engineer',
	description:
		'Personal website of Marcelo Bruzetti, a Senior Software Engineer focused on backend systems, software architecture, and technical writing.',
	url: 'https://marcelobruzetti.com',
	locale: 'en_US',
} as const;

export type Site = typeof site;
