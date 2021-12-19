import type { SNSHandler } from 'aws-lambda';
import { cloudWatchAlarmWithSns } from 'app';

export const handlers: SNSHandler = async (event) => {
	await cloudWatchAlarmWithSns(event);
};

export default handlers;
