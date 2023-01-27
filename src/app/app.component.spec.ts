import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
    it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'proyecto27-1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('proyecto27-1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('proyecto27-1');
  });

  });
  it('should calculate result correctly for sum operation', () => {
    component.valor1 = 5;
    component.valor2 = 7;
    component.operar('suma');
    expect(component.resultado).toBe(12);
  });

  it('should calculate result correctly for subtraction operation', () => {
    component.valor1 = 5;
    component.valor2 = 7;
    component.operar('resta');
    expect(component.resultado).toBe(-2);
  });

  it('should calculate result correctly for multiplication operation', () => {
    component.valor1 = 5;
    component.valor2 = 7;
    component.operar('multiplicacion');
    expect(component.resultado).toBe(35);
  });

  it('should calculate result correctly for division operation', () => {
    component.valor1 = 14;
    component.valor2 = 7;
    component.operar('division');
    expect(component.resultado).toBe(2);
  });
});
