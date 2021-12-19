function getEnv(key: string): string {
	const val = process.env[key];

	if (!val) {
		throw new Error(`${key} env is not set!`);
	}

	return val;
}

export function getDiscordWebHookUrl() {
	return getEnv('DISCORD_WEB_HOOK_URL');
}
