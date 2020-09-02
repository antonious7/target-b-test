import genId from '../lib/gen-id';
import { MutationUpdateTextArgs, TextInputType } from '../__generated__/resolver-types';

let initialText = {
  id: genId(),
  text: 'Type in some text',
};

export const updateText = (_: object, args: MutationUpdateTextArgs): TextInputType => {
  const {
    id,
    input: { text },
  } = args;
  const updatedText = {
    id,
    text,
  };
  initialText = updatedText;
  return updatedText;
};

export const getText = () => initialText;
