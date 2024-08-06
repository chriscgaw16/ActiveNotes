'use client'
import React from 'react';
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const DictaphoneTwo = () => {
  const commands = [
    {
      command: 'I would like to order *',
      callback: (food: string) => console.log(`Your order is for: ${food}`)
    }
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="flex flex-col gap-2">
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div className="flex flex-row gap-6">
        <div className="border-4 w-20 text-center" onClick={() => SpeechRecognition.startListening()}>Start</div>
        <div className="border-4 w-20 text-center" onClick={() => SpeechRecognition.stopListening()}>Stop</div>
        <div className="border-4 w-20 text-center" onClick={() => resetTranscript()}>Reset</div>
      </div>
      <p>{transcript}</p>
    </div>
  );
};
export default DictaphoneTwo;