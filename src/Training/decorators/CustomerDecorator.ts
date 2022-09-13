import cpfMask from '../utils/cpf-mask';
import validate from '../utils/validate-cpf';

export function cpfDecorator(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<string>,
): any {
  const set = descriptor.set!;

  descriptor.set = function (cpf: string) {
    set.call(this, validate(cpf) ? cpfMask(cpf) : cpf);
  };
}
