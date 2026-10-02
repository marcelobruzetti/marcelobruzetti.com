export type ExperienceEntry = {
	company: string;
	role: string;
	startDate: string;
	endDate?: string;
	context: string;
	contributions: string[];
	technologies?: string[];
};

export const experience: ExperienceEntry[] = [
	{
		company: 'Stacktone Tech Solutions',
		role: 'Software Consultant & Founder',
		startDate: '2021-11',
		context:
			'Independent software engineering and technology consulting focused on backend systems, cloud architecture, integrations, automation, and scalability.',
		contributions: [
			'Work directly with clients to understand business and technical requirements, identify architectural constraints, and design pragmatic software solutions.',
			'Design and develop backend services, APIs, integrations, automation, and cloud-native solutions across different business domains.',
			'Work across unfamiliar systems and problem spaces, balancing technical complexity, maintainability, and business constraints.',
		],
		technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST', 'GraphQL', 'GCP', 'AWS', 'Docker', 'Kubernetes'],
	},
	{
		company: 'Vitrine Retail',
		role: 'Senior Backend Engineer → Squad Leader',
		startDate: '2023-04',
		endDate: '2026-07',
		context:
			'Backend engineering and technical leadership for a cloud-based SaaS platform, working across application architecture, data, integrations, and product delivery.',
		contributions: [
			'Designed and evolved backend services and APIs using Node.js, TypeScript, PostgreSQL, GraphQL/Hasura, and Google Cloud Platform.',
			'Solved a database performance bottleneck involving PostgreSQL views used in joins and Hasura permission checks by moving the workload to materialized views with automated refresh routines.',
			'Developed serverless and event-driven solutions using Cloud Functions, Cloud Run, and Pub/Sub, as well as integrations and business-process automation.',
			'From March 2025, led a cross-functional squad while remaining hands-on, working with the Product Owner on technical decisions, priorities, requirements, and delivery planning.',
			'Provided technical guidance, code reviews, architectural discussions, and support for frontend and backend engineers.',
		],
		technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'Hasura', 'GCP', 'Cloud Functions', 'Cloud Run', 'Pub/Sub', 'Docker', 'Puppeteer'],
	},
	{
		company: 'TSIGO Soluções em Rastreamento',
		role: 'Software Engineer & Founder',
		startDate: '2016-12',
		endDate: '2023-04',
		context:
			'An end-to-end asset-tracking product connecting GPS devices, backend services, web and mobile applications, and third-party systems.',
		contributions: [
			'Designed the system architecture and built the product from the ground up into a working platform used by customers.',
			'Built GPS communication gateways, backend APIs, real-time tracking services, and integrations with external systems.',
			'Worked across web and mobile applications, cloud infrastructure, hardware integration and homologation, and customer requirements.',
			'Exposed APIs consumed by third-party systems, requiring reliable communication between devices, backend services, applications, and external integrations.',
		],
		technologies: ['PHP', 'Laravel', 'Flutter', 'MySQL', 'REST APIs', 'TCP/UDP', 'GPS/IoT Integration'],
	},
	{
		company: 'SolarView',
		role: 'Full Stack Developer → Technical Lead',
		startDate: '2021-10',
		endDate: '2023-03',
		context:
			'Data collection and integration systems for solar-power monitoring, including large-scale web crawling across external platforms.',
		contributions: [
			'Developed and maintained crawlers and data-collection integrations using Node.js and Puppeteer.',
			'Led a team of four backend engineers responsible for crawling and data-integration systems.',
			'Redesigned the integration architecture using Docker and message brokers when the existing architecture became a bottleneck for scaling development and data collection.',
			'The new architecture enabled integrations to grow 3x within the first three months and eventually exceed 10x the original volume while improving data-collection performance and reliability.',
			'Introduced CI/CD pipelines using Bitbucket Pipelines to improve deployment consistency and establish continuous-delivery practices.',
		],
		technologies: ['Node.js', 'JavaScript', 'Docker', 'RabbitMQ', 'AWS', 'Puppeteer', 'Bitbucket Pipelines', 'CI/CD'],
	},
	{
		company: 'Link Monitoramento',
		role: 'Intern → Senior PHP Developer → Technical Lead',
		startDate: '2011-05',
		endDate: '2016-09',
		context:
			"Development and technical leadership for the company's core ERP platform supporting internal operations and franchisees.",
		contributions: [
			'Progressed from an internship position to Senior PHP Developer and later Technical Lead.',
			'Developed and evolved business-critical ERP functionality using PHP and MySQL.',
			'Worked on database maintenance, query optimization, requirements analysis, and production troubleshooting.',
			'As Technical Lead, coordinated engineering work while remaining involved in implementation and technical decisions.',
			'Worked directly with users and franchisees to translate operational requirements and production issues into software improvements.',
		],
		technologies: ['PHP', 'MySQL', 'SQL', 'Web Applications', 'ERP Systems'],
	},
	{
		company: 'EBECOM',
		role: 'PHP Developer',
		startDate: '2006-06',
		endDate: '2010-12',
		context:
			'Vehicle-tracking and business applications involving GPS communication, telemetry data, geolocation, and web software.',
		contributions: [
			'Started as an intern and later moved into a full-time software development role.',
			'Developed and maintained vehicle-tracking systems and business web applications.',
			'Worked with communication and interpretation of GPS device data, transforming telemetry into information used by the tracking platform.',
			'Developed map-based vehicle visualization features and custom applications for business requirements.',
			'Worked directly with production systems, device integrations, geolocation, and customer troubleshooting early in my engineering career.',
		],
		technologies: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'GPS/Telemetry Integration'],
	},
];
