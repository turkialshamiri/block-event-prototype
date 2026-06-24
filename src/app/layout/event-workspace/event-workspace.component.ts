import { Component, signal } from '@angular/core';

interface SelectOption {
  label: string;
  value: string;
}

type HallAvailability = 'available' | 'conflict';

@Component({
  selector: 'app-event-workspace',
  templateUrl: './event-workspace.component.html',
  styleUrl: './event-workspace.component.scss',
})
export class EventWorkspaceComponent {
  protected readonly eventStatuses: SelectOption[] = [
    { label: 'استفسار', value: 'inquiry' },
    { label: 'مبدئي', value: 'tentative' },
    { label: 'مؤكد', value: 'confirmed' },
    { label: 'ملغي', value: 'cancelled' },
    { label: 'مكتمل', value: 'completed' },
  ];

  protected readonly eventTypes: SelectOption[] = [
    { label: 'زفاف', value: 'wedding' },
    { label: 'مؤتمر', value: 'conference' },
    { label: 'اجتماع', value: 'meeting' },
    { label: 'معرض', value: 'exhibition' },
    { label: 'دورة تدريبية', value: 'training' },
    { label: 'فعالية شركات', value: 'corporate-event' },
    { label: 'فعالية اجتماعية', value: 'social-event' },
    { label: 'فعالية خاصة', value: 'private-event' },
  ];

  protected readonly mainHalls: SelectOption[] = [
    { label: 'القاعة الملكية', value: 'royal-hall' },
    { label: 'قاعة الألماس', value: 'diamond-hall' },
    { label: 'قاعة الياسمين', value: 'jasmine-hall' },
    { label: 'قاعة الروائع', value: 'marvel-hall' },
  ];

  protected readonly alternateHalls: SelectOption[] = [
    { label: 'قاعة اللؤلؤة', value: 'pearl-hall' },
    { label: 'قاعة الفيروز', value: 'turquoise-hall' },
    { label: 'قاعة النخيل', value: 'palm-hall' },
    { label: 'بدون قاعة بديلة', value: 'none' },
  ];

  protected readonly pricingTypes: SelectOption[] = [
    { label: 'تسعير يومي', value: 'daily' },
    { label: 'تسعير بالساعة', value: 'hourly' },
    { label: 'باقة شاملة', value: 'package' },
    { label: 'تسعير موسمي', value: 'seasonal' },
  ];

  protected readonly setupStyles: SelectOption[] = [
    { label: 'مسرحي', value: 'theater' },
    { label: 'مأدولة مستديرة', value: 'round-table' },
    { label: 'قاعة اجتماعات', value: 'meeting' },
    { label: 'مفتوح (كوكتيل)', value: 'cocktail' },
    { label: 'مخصص', value: 'custom' },
  ];

  protected readonly defaultEventStatus = 'confirmed';
  protected readonly defaultEventType = 'wedding';
  protected readonly defaultMainHall = 'royal-hall';
  protected readonly defaultPricingType = 'package';

  protected readonly mainHallAvailability = signal<HallAvailability>('available');

  private readonly conflictHalls = new Set(['diamond-hall', 'marvel-hall']);

  protected onMainHallChange(event: Event): void {
    const select = event.target as HTMLSelectElement | null;
    if (!select) return;
    this.mainHallAvailability.set(
      this.conflictHalls.has(select.value) ? 'conflict' : 'available',
    );
  }
}
