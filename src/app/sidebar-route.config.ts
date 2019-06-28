import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
    {
        path: '', title: 'menu.cashChanges', icon: 'fa fa-money', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/acssBalance', title: 'menu.acssBalance', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/lvtsCashPosition', title: 'menu.lvtsCashPosition', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/lvtsBalanceTransfer', title: 'menu.lvtsBalanceTransfer', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/bankNotes', title: 'menu.bankNotes', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'menu.paymentsAndReceipts', icon: 'fa fa-exchange', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/govtSummary', title: 'menu.governmentItems', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/payments', title: 'menu.allIncomingAndOutgoingPayments', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/clientAccounts', title: 'menu.clientAccounts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/transactions/search', title: 'menu.transactions', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/cdsxReconciliation', title: 'menu.cdsxReconciliation', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/efaFxSummary', title: 'menu.efaFxSummary', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/efaSwapForecast', title: 'menu.efaSwapForecast', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'menu.cashSetting', icon: 'fa fa-cogs', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/neutralizationSummary', title: 'menu.neutralizationSummary', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/eodBalancing', title: 'menu.endOfDayBalancing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'menu.cashProjection', icon: 'fa fa-area-chart', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/lvtsCashSettingsForecast', title: 'menu.lvtsCashSettingsForecast', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/termDeposit', title: 'menu.termDeposit', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/cashproj', title: 'menu.cashProjectionSummary', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/bankfcst', title: 'menu.bankNoteForecast', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/bankfsctimp', title: 'menu.bankNoteForecastImport', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/rfbboperations', title: 'menu.rgBuyBackOperations', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tmdimport', title: 'menu.tmdImportExport', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'menu.systemAdmin', icon: 'fa fa-user-circle', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/accounts-and-account-balances', title: 'menu.accountAndAccountBalance', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/participant', title: 'menu.participants', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/transactions-definition/list', title: 'menu.transactionDefinition', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/operationalImportExport', title: 'menu.operationalImportExport', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/calendarImport', title: 'menu.calendarImport', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/rates/list', title: 'menu.bankRate', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    
];
