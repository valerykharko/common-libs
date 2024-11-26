import { ConsumerConfig, KafkaMessage } from "kafkajs";

export interface IKafkaConsumerOptions {
  topic: string;
  config: ConsumerConfig;
  onMessage: (message: KafkaMessage) => Promise<void>;
}
