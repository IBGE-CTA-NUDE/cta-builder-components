import React from 'react';
import {useForm} from 'react-hook-form';

import {useCurrentRef} from '../../hooks/useCurrentRef';
import {FormItem} from '../Form/Label';
import {FormGroup} from '../Form/FormGroup';
import {ColumnHeader} from '../Form/ColumnHeader';

interface IconFormProps {
  onSubmit: (data: IconFormData) => void;
}

export type IconFormData = {
  icon: string,
  width: number,
  height: number,
};

const IconForm: React.FC<IconFormProps> = ({
  onSubmit,
}): React.ReactElement => {
  const submitRef = useCurrentRef(onSubmit);

  const {register, handleSubmit} = useForm<IconFormData>({
    reValidateMode: 'onChange',
    defaultValues: {
      icon: '',
      width: 20,
      height: 20,
    },
  });

  const submit = React.useCallback((data: IconFormData) => {
    submitRef.current?.(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <ColumnHeader>
        <p><strong>Icon props</strong></p>
        <button type="submit">Atualizar</button>
      </ColumnHeader>

      <FormGroup>
        <FormItem column label="close">
          <input type="radio"
            value="close-circle"
            {...register('icon', {required: true})}
          />
        </FormItem>
        <FormItem column label="chevron-down">
          <input type="radio"
            value="chevron-down"
            {...register('icon', {required: true})}
          />
        </FormItem>
      </FormGroup>

      <FormGroup>
        <FormItem column label="Altura">
          <input type="height" min="0"
            {...register('height', {required: true})}
          />
        </FormItem>
      </FormGroup>

      <FormGroup>
        <FormItem column label="Largura">
          <input type="number" min="0"
            {...register('width', {required: true})}
          />
        </FormItem>
      </FormGroup>
    </form>
  );
};

export {IconForm};
