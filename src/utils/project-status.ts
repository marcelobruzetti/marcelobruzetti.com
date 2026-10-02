export const projectStatusLabels = {
	active: 'In development',
	completed: 'Completed',
	archived: 'Archived',
} as const;

export type ProjectStatus = keyof typeof projectStatusLabels;

export function getProjectStatusLabel(status?: ProjectStatus) {
	return status ? projectStatusLabels[status] : undefined;
}
