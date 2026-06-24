import { Component } from '@angular/core';

interface BreadcrumbItem {
  label: string;
  active?: boolean;
}

interface SelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  protected readonly breadcrumbs: BreadcrumbItem[] = [
    { label: 'الرئيسية' },
    { label: 'إدارة الحجوزات' },
    { label: 'Business Blocks' },
    { label: 'إنشاء Business Block', active: true },
  ];

  protected readonly properties: SelectOption[] = [
    { label: 'فندق الرياض الفاخر', value: 'riyadh-luxury' },
    { label: 'فندق جدة البحر الأحمر', value: 'jeddah-red-sea' },
    { label: 'منتجع العلا الصحراوي', value: 'ula-desert' },
  ];

  protected readonly accounts: SelectOption[] = [
    { label: 'شركة الضيافة المتحدة', value: 'hospitality-united' },
    { label: 'مجموعة الفعاليات الدولية', value: 'events-intl' },
    { label: 'مؤسسة الاجتماعات الخليجية', value: 'gulf-meetings' },
  ];

  protected readonly contacts: SelectOption[] = [
    { label: 'سارة الحربي', value: 'sarah' },
    { label: 'أحمد القحطاني', value: 'ahmed' },
    { label: 'نورة الشمري', value: 'noura' },
  ];

  protected readonly blockStatuses: SelectOption[] = [
    { label: 'مؤكد', value: 'confirmed' },
    { label: 'قيد المراجعة', value: 'pending' },
    { label: 'مسودة', value: 'draft' },
  ];

  protected readonly salesManagers: SelectOption[] = [
    { label: 'محمد العتيبي', value: 'mohammed' },
    { label: 'فهد الدوسري', value: 'fahad' },
    { label: 'ريم العنزي', value: 'reem' },
  ];

  protected readonly markets: SelectOption[] = [
    { label: 'السوق المحلي', value: 'local' },
    { label: 'السوق الإقليمي', value: 'regional' },
    { label: 'السوق الدولي', value: 'international' },
  ];

  protected readonly bookingSources: SelectOption[] = [
    { label: 'مباشر', value: 'direct' },
    { label: 'وكيل سفر', value: 'agent' },
    { label: 'منصة إلكترونية', value: 'online' },
  ];

  protected readonly bookingTypes: SelectOption[] = [
    { label: 'Business Block', value: 'business-block' },
    { label: 'Group Booking', value: 'group' },
    { label: 'Event Package', value: 'event' },
  ];
}
