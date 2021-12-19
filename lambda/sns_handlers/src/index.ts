import type { SNSHandler } from 'aws-lambda';
import { cloudWatchAlarmWithSns } from 'app';

export const hanlders: SNSHandler = async (event) => {
	await cloudWatchAlarmWithSns(event);
};

export default hanlders;
