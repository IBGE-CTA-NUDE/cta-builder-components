import React from 'react';
import {useForm} from 'react-hook-form';

import {useCurrentRef} from '../../hooks/useCurrentRef';
import {FormItem} from '../Form/Label';
import {ColumnHeader} from '../Form/ColumnHeader';
import {FormGroup} from '../Form/FormGroup';

interface TooltipFormProps {
  onSubmit: (data: TooltipFormData) => void;
}

export type TooltipFormData = {
  tooltip: string;
  content: string;
};

const TooltipForm: React.FC<TooltipFormProps> = ({
  onSubmit,
}): React.ReactElement => {
  const submitRef = useCurrentRef(onSubmit);

  const {register, handleSubmit} = useForm<TooltipFormData>({
    reValidateMode: 'onChange',
    defaultValues: {
      tooltip: '',
      content: '',
    },
  });

  const submit = React.useCallback((data: TooltipFormData) => {
    submitRef.current?.(data);
  }, []);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <ColumnHeader>
        <p><strong>Tooltip props</strong></p>
        <button type="submit">Atualizar</button>
      </ColumnHeader>

      <FormGroup>
        <FormItem column label="Texto do tooltip">
          <textarea
            rows={5}
            defaultValue=""
            {...register('tooltip', {required: true})}
          />
        </FormItem>
      </FormGroup>

      <FormGroup>
        <FormItem column label="Conteúdo">
          <textarea
            rows={5}
            defaultValue=""
            {...register('content', {required: true})}
          />
        </FormItem>
      </FormGroup>
    </form>
  );
};

export {TooltipForm};
