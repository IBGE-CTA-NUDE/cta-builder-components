import React from 'react';
import {useFieldArray, useForm} from 'react-hook-form';

import {useCurrentRef} from '../../hooks/useCurrentRef';
import {ColumnHeader} from '../Form/ColumnHeader';
import {FormGroup} from '../Form/FormGroup';
import {FormItem} from '../Form/Label';

interface AccordionFormProps {
  onSubmit: (data: AccordionFormData['accordion']) => void;
}

export type AccordionFormData = {
  accordion: { trigger: string; content: string }[];
};

const AccordionForm: React.FC<AccordionFormProps> = ({
  onSubmit,
}): React.ReactElement => {
  const submitRef = useCurrentRef(onSubmit);

  const {register, handleSubmit, control} = useForm<AccordionFormData>({
    reValidateMode: 'onChange',
    defaultValues: {
      accordion: [{trigger: '', content: ''}],
    },
  });
  const {fields, append, remove} = useFieldArray({name: 'accordion', control});

  const submit = React.useCallback((data: AccordionFormData) => {
    submitRef.current?.(data.accordion);
  }, []);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <ColumnHeader>
        <p>
          <strong>Accordion props</strong>
        </p>
      </ColumnHeader>
      <ColumnHeader style={{paddingTop: 0}}>
        <button type='button' onClick={() => append({trigger: '', content: ''})}>Adicionar item</button>
        <button type='submit'>Atualizar</button>
      </ColumnHeader>

      {fields.map((item, index) => {
        return (
          <FormGroup key={item.id} style={{position: 'relative'}}>
            <FormItem column label='Botão'>
              <input
                defaultValue={`${item.trigger}`}
                {...register(`accordion.${index}.trigger`, {required: true})}
              />
            </FormItem>

            <FormItem column label='Conteúdo'>
              <textarea
                rows={3}
                defaultValue={`${item.content}`}
                {...register(`accordion.${index}.content`, {required: true})}
              />
            </FormItem>

            <cta-icon
              name='close-circle'
              width={18}
              height={18}
              onClick={() => remove(index)}
              style={{position: 'absolute', cursor: 'pointer', top: '20px', right: '20px', opacity: 0.5}}
            >
            </cta-icon>
          </FormGroup>
        );
      })}
    </form>
  );
};

export {AccordionForm};
