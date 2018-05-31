/* tslint:disable:ban-types */
/* tslint:disable:max-classes-per-file */
/* tslint:disable:no-empty-interface */

declare module '@coreui/react' {
    import {ReactNode} from "react";

    interface ICoreuiBaseProps {
        tag ?: Function | string;
        children?: ReactNode;
        className?: string;
        display?: string;
        type?:string;
    }

    interface IAppAsideProps extends ICoreuiBaseProps {
        fixed?: boolean;
        hidden?: boolean;
        isOpen?: boolean;
        offCanvas?: boolean;
    }

    class AppAside extends React.Component<IAppAsideProps, {}> {
    }

    interface IAppAsideTogglerProps extends ICoreuiBaseProps {
        mobile?: boolean;
    }

    class AppAsideToggler extends React.Component<IAppAsideTogglerProps, {}> {
    }

    /* 
     *  ---------------------
     *       AppBreadcrumb
     *  ----------------------
     */
    interface IAppBreadcrumbProps extends ICoreuiBaseProps {
        appRoutes ?: any
    }

    class AppBreadcrumb extends React.Component<IAppBreadcrumbProps, {}> {
    }

    /*
     *  ---------------------
     *       AppFooter
     *  ----------------------
     */
    interface IAppFooterProps extends ICoreuiBaseProps {
        fixed?:boolean;
     }

    class AppFooter extends React.Component<IAppFooterProps, {}> {
    }

    /*
     *  ---------------------
     *       AppHeader
     *  ----------------------
     */
    interface IAppHeaderProps extends ICoreuiBaseProps {
        fixed ?: boolean;
     }

    class AppHeader extends React.Component<IAppHeaderProps, {}> {
    }

    /*
     *  ---------------------
     *       AppHeaderDropdown
     *  ----------------------
     */

    interface IAppHeaderDropdownProps {
        children?: ReactNode;
        direction?: string;
    }
    class AppHeaderDropdown extends React.Component<IAppHeaderDropdownProps,{}>{}

    /*
     *  ---------------------
     *       AppNavbarBrand
     *  ----------------------
     */
    interface IAppNavbarBrandProps extends ICoreuiBaseProps {
        brand ?: any;
        minimized ?: any;
        full ?: any;
    }

    class AppNavbarBrand extends React.Component<IAppNavbarBrandProps, {}> {
    }

    /*
     *  ---------------------
     *       AppSidebar
     *  ----------------------
     */
    interface IAppSidebarProps extends ICoreuiBaseProps {
        compact ?: boolean;
        fixed ?: boolean;
        minimized ?: boolean;
        isOpen ?: boolean;
        offCanvas ?: boolean;
        staticContext ?: any;
    }

    class AppSidebar extends React.Component<IAppSidebarProps, {}> {
    }

    /*
     *  ---------------------
     *       AppSidebarFooter
     *  ----------------------
     */
    interface IAppSidebarFooterProps extends ICoreuiBaseProps {


    }

    class AppSidebarFooter extends React.Component<IAppSidebarFooterProps, {}> {
    }

    /*
     *  ---------------------
     *       AppSidebarForm
     *  ----------------------
     */
    interface IAppSidebarFormProps extends ICoreuiBaseProps {


    }

    class AppSidebarForm extends React.Component<IAppSidebarFormProps, {}> {
    }

    /*
     *  ---------------------
     *     AppSidebarMinimizer
     *  ----------------------
     */
    interface IAppSidebarMinimizerProps extends ICoreuiBaseProps {


    }

    class AppSidebarMinimizer extends React.Component<IAppSidebarMinimizerProps, {}> {
    }

    /*
     *  ---------------------
     *       AppSidebarNav
     *  ----------------------
     */
    interface IAppSidebarNavProps extends ICoreuiBaseProps {
        navConfig ?: any;
        navFunc ?: Function | string;
        isOpen ?: boolean;
        staticContext?: any;
    }

    class AppSidebarNav extends React.Component<IAppSidebarNavProps, {}> {
    }

    /*
     *  ---------------------
     *       AppSidebarToggler
     *  ----------------------
     */
    interface IAppSidebarTogglerProps extends ICoreuiBaseProps {
        mobile?: boolean;
    }

    class AppSidebarToggler extends React.Component<IAppSidebarTogglerProps, {}> {
    }

    /*
     *  ---------------------
     *       AppSwitch
     *  ----------------------
     */
    interface IAppSwitchProps extends ICoreuiBaseProps {
        color ?: string;
        label?: boolean;
        outline ?: boolean | string;
        size ?: string;
        checked ?: boolean;
        defaultChecked ?: boolean;
        defaultValue ?: any;
        value ?: string;
        disabled ?: boolean;
        form ?: any;
        name ?: string;
        required ?: boolean;
        onChange ?: Function;
        type ?: string;
        variant ?: string;
        dataOn ?: string;
        dataOff ?: string;
    }

    class AppSwitch extends React.Component<IAppSwitchProps, {}> {
    }
}
