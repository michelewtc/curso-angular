import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2020-11-11 para 11/11/2020', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2020-11-11')).toEqual('11/11/2020');
  });
});
