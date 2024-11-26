import { ConsumerConfig, KafkaMessage } from "kafkajs";

interface IKafkaConsumerOptions {
  topic: string;
  config: ConsumerConfig;
  onMessage: (message: KafkaMessage) => Promise<void>;
}
