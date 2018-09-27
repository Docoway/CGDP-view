import { DiagnosisRoutingModule } from './diagnosis-routing.module';

describe('DiagnosisRoutingModule', () => {
  let diagnosisRoutingModule: DiagnosisRoutingModule;

  beforeEach(() => {
    diagnosisRoutingModule = new DiagnosisRoutingModule();
  });

  it('should create an instance', () => {
    expect(diagnosisRoutingModule).toBeTruthy();
  });
});
