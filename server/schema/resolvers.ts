import { getText, updateText } from '../requests/text-requests';
import { Resolvers } from '../__generated__/resolver-types';


interface StringIndexSignatureInterface {
  [index: string]: any;
}

type StringIndexed<T> = T & StringIndexSignatureInterface

const resolvers: StringIndexed<Resolvers> = {
  Query: {
    text: () => getText(),
  },
  Mutation: {
    updateText: async (__, args) => updateText({}, args),
  },
};

export default resolvers;
