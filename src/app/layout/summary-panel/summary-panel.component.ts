import { Component } from '@angular/core';

interface SummaryItem {
  label: string;
  value: string;
  icon: string;
  badge?: 'green' | 'gray';
}

@Component({
  selector: 'app-summary-panel',
  templateUrl: './summary-panel.component.html',
  styleUrl: './summary-panel.component.scss',
})
export class SummaryPanelComponent {
  protected readonly items: SummaryItem[] = [
    { label: 'الشركة', value: 'شركة الضيافة المتحدة', icon: 'pi pi-briefcase' },
    { label: 'جهة الاتصال', value: 'سارة الحربي', icon: 'pi pi-user' },
    { label: 'المنشأة', value: 'فندق الرياض الفاخر', icon: 'pi pi-building' },
    { label: 'تاريخ البداية', value: '24 يونيو 2026', icon: 'pi pi-calendar' },
    { label: 'تاريخ النهاية', value: '26 يونيو 2026', icon: 'pi pi-calendar-times' },
    { label: 'عدد الليالي', value: '2', icon: 'pi pi-moon', badge: 'gray' },
    { label: 'الحالة', value: 'مؤكد', icon: 'pi pi-check-circle', badge: 'green' },
    { label: 'مدير المبيعات', value: 'محمد العتيبي', icon: 'pi pi-user' },
    { label: 'نوع الحجز', value: 'Business Block', icon: 'pi pi-tag' },
  ];
}
