'use client';

import { default as FormRaw, useForm, List, Field } from 'rc-field-form';
import TextArea from 'rc-textarea';
import { cn } from '@/lib/style';
import Checkbox from '@/components/form/Checkbox';
import { useState } from 'react';

export default function Editor() {
  const [form] = useForm();
  const [originalLines, setOriginalLines] = useState(0);
  const [removedLines, setRemovedLines] = useState(0);
  const [remainingLines, setRemainingLines] = useState(0);
  const onValuesChange = (changedValues: any, allValues: any) => {
    console.log(changedValues, allValues);
    setOriginalLines(allValues.srcText.split('\n').length);
  };
  const onSubmit = () => {
    const values: any = form.getFieldsValue() || {};
    const { srcText, ignoreCapitals, keepBlanksAtLineStarts, keepEmptyLines, sortResults } = values;
    let result = srcText.split('\n').map((line: string) => {
      if (ignoreCapitals) {
        line = line.toLowerCase();
      }
      if (!keepBlanksAtLineStarts) {
        line = line.replace(/^\s+/, '');
      }
      if (!keepEmptyLines) {
        line = line.trim();
      }
      return line;
    });
    result = result.reduce((acc: string[], line: string) => {
      const shouldKeepThisLine = keepEmptyLines || line.length > 0;
      if ((!acc.includes(line) || line.length === 0) && shouldKeepThisLine) {
        acc.push(line);
      }
      return acc;
    }, []);
    if (sortResults) {
      result.sort();
    }
    const remainingLines = result.length;
    setRemovedLines(originalLines - remainingLines);
    setRemainingLines(remainingLines);
    form.setFieldsValue({ result: result.join('\n') });
  };
  return (
    <div className="text-sm" id="duplicate-remover">
      <FormRaw className="w-full" form={form} onValuesChange={onValuesChange}>
        <div className="flex flex-col md:flex-row gap-2 md:flex-nowrap items-center">
          {/* 编辑区 */}
          <div className="grow self-stretch">
            <div className="bg-primary p-2 rounded-t-md font-bold">Original</div>
            <Field name="srcText">
              <TextArea rows={20} autoSize={false} autoFocus placeholder='Enter text here...' className={cn('w-full p-4 rounded-b-md outline-none border-none')} />
            </Field>
          </div>
          {/* 选项按钮区 */}
          <div className="shrink-0 p-2 space-y-2 bg-neutral rounded-md divide-y divide-base-content/20 text-xs lg:text-sm">
            <div className="space-y-2">
              <Field name="ignoreCapitals">
                <Checkbox
                  label={
                    <>
                      Ignore capitals
                      <br />
                      (lowercased results)
                    </>
                  }
                />
              </Field>
              <Field name="keepBlanksAtLineStarts">
                <Checkbox label="Keep blanks at line starts" />
              </Field>
              <Field name="keepEmptyLines">
                <Checkbox label="Keep empty lines" />
              </Field>
              <Field name="sortResults">
                <Checkbox label="Sort results" />
              </Field>
              <button className="btn btn-sm btn-primary" onClick={onSubmit}>
                Submit
              </button>
            </div>
            <div className="pt-2 space-y-1 text-neutral-content">
              <div>Original: {originalLines}</div>
              <div>Removed: {removedLines}</div>
              <div>Remaining: {remainingLines}</div>
            </div>
          </div>
          {/* 结果区 */}
          <div className="grow self-stretch">
            <div className="bg-primary p-2 rounded-t-md font-bold">Result</div>
            <Field name="result">
              <TextArea
                rows={20}
                autoSize={false}
                placeholder='Result will be shown here...'
                className={cn('w-full p-4 rounded-b-md outline-none border-none')}
              />
            </Field>
          </div>
        </div>
      </FormRaw>
    </div>
  );
}
