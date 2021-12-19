import type { SNSEvent } from 'aws-lambda';
import got from 'got';
import { getDiscordWebHookUrl } from '../utils/get_env';

// lambda notify with discord for sns
export const cloudWatchAlarmWithSns = async (event: SNSEvent) => {
	try {
		await got.post(getDiscordWebHookUrl(), {
			json: {
				embeds: [
					{
						description: JSON.stringify(event, null, 2),
					},
				],
			},
		});
	} catch (error) {
		throw new Error(`${error}`);
	}
};
