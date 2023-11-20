export interface ISidebarItem {
    key: string;
    icon: React.ReactNode;
    label: string;
    children?: { label: string, onClick: (el: any) => void }[]
}