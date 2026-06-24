import { Component } from '@angular/core';

interface BreadcrumbItem {
  label: string;
  active?: boolean;
}

interface ContentCard {
  title: string;
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

  protected readonly cards: ContentCard[] = [
    { title: 'معلومات المنشأة' },
    { title: 'الشركة وجهة الاتصال' },
    { title: 'معلومات البلوك' },
    { title: 'المتابعة والقرار' },
  ];
}
