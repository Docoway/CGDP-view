import { DiagnosisCommonModule } from './diagnosis-common.module';

describe('DiagnosisCommonModule', () => {
  let diagnosisCommonModule: DiagnosisCommonModule;

  beforeEach(() => {
    diagnosisCommonModule = new DiagnosisCommonModule();
  });

  it('should create an instance', () => {
    expect(diagnosisCommonModule).toBeTruthy();
  });
});
