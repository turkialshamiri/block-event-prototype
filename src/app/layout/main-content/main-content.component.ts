import { Component, signal } from '@angular/core';

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
    { label: 'فندق الخليج - الرياض', value: 'gulf-hotel-riyadh' },
    { label: 'فندق النخبة - جدة', value: 'elite-hotel-jeddah' },
    { label: 'منتجع الواحة - الخبر', value: 'oasis-resort-khobar' },
    { label: 'فندق الأعمال - الدمام', value: 'business-hotel-dammam' },
  ];

  protected readonly accounts: SelectOption[] = [
    { label: 'شركة الأفق للمناسبات', value: 'ufuq-events' },
    { label: 'مجموعة النخبة', value: 'elite-group' },
    { label: 'شركة الخليج للفعاليات', value: 'gulf-events' },
    { label: 'شركة الريادة للأعمال', value: 'riyada-business' },
  ];

  protected readonly contacts: SelectOption[] = [
    { label: 'أحمد محمد', value: 'ahmed-mohammed' },
    { label: 'خالد عبدالله', value: 'khalid-abdullah' },
    { label: 'سارة علي', value: 'sarah-ali' },
    { label: 'نورة أحمد', value: 'noura-ahmed' },
  ];

  protected readonly blockStatuses: SelectOption[] = [
    { label: 'استفسار', value: 'inquiry' },
    { label: 'مبدئي', value: 'tentative' },
    { label: 'فرصة محتملة', value: 'prospect' },
    { label: 'مؤكد', value: 'confirmed' },
    { label: 'ملغي', value: 'cancelled' },
    { label: 'مفقود', value: 'lost' },
    { label: 'مكتمل', value: 'completed' },
  ];

  protected readonly salesManagers: SelectOption[] = [
    { label: 'محمد العتيبي', value: 'mohammed-alotaibi' },
    { label: 'خالد الحربي', value: 'khalid-alharbi' },
    { label: 'سارة القحطاني', value: 'sarah-alqahtani' },
    { label: 'أحمد الشهري', value: 'ahmed-alshehri' },
    { label: 'نورة السبيعي', value: 'noura-alsubaie' },
  ];

  protected readonly markets: SelectOption[] = [
    { label: 'شركات', value: 'corporate' },
    { label: 'جهات حكومية', value: 'government' },
    { label: 'جمعيات', value: 'associations' },
    { label: 'تعليم', value: 'education' },
    { label: 'رياضة', value: 'sports' },
    { label: 'حفلات زفاف', value: 'weddings' },
    { label: 'مناسبات اجتماعية', value: 'social-events' },
  ];

  protected readonly bookingSources: SelectOption[] = [
    { label: 'مباشر', value: 'direct' },
    { label: 'فريق المبيعات', value: 'sales-team' },
    { label: 'الموقع الإلكتروني', value: 'website' },
    { label: 'إحالة', value: 'referral' },
    { label: 'شريك أعمال', value: 'business-partner' },
    { label: 'معرض أو مؤتمر', value: 'exhibition-conference' },
  ];

  protected readonly bookingTypes: SelectOption[] = [
    { label: 'زفاف', value: 'wedding' },
    { label: 'مؤتمر', value: 'conference' },
    { label: 'اجتماع', value: 'meeting' },
    { label: 'معرض', value: 'exhibition' },
    { label: 'دورة تدريبية', value: 'training' },
    { label: 'فعالية شركات', value: 'corporate-event' },
    { label: 'فعالية اجتماعية', value: 'social-event' },
    { label: 'فعالية خاصة', value: 'private-event' },
  ];

  protected readonly defaultBlockStatus = 'confirmed';
  protected readonly defaultMarket = 'corporate';
  protected readonly defaultBookingType = 'wedding';
  protected readonly defaultSalesManager = 'mohammed-alotaibi';

  protected readonly selectedBlockStatus = signal(this.defaultBlockStatus);

  protected onBlockStatusChange(event: Event): void {
    const select = event.target as HTMLSelectElement | null;
    if (!select) return;
    this.selectedBlockStatus.set(select.value);
  }
}
