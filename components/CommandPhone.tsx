'use client'
import React from 'react';
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Command } from '../lib/types';

interface CommandPhoneProps {
    commands: Command[]
}

const CommandPhone = ({commands}: CommandPhoneProps) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({commands});

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="flex flex-col gap-2 border-4 px-4 py-4">
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <div className="flex flex-row gap-6">
        <div className="border-4 w-20 text-center" onClick={() => SpeechRecognition.startListening({continuous: true})}>Start</div>
        <div className="border-4 w-20 text-center" onClick={() => {
            SpeechRecognition.stopListening();
            resetTranscript()
        }}>Stop</div>
        <div className="border-4 w-20 text-center" onClick={() => resetTranscript()}>Reset</div>
        <div>{transcript}</div>
      </div>
    </div>
  );
};
export default CommandPhone;