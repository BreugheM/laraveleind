<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{url('admin')}}">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Portland</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
        <a class="nav-link" href="{{route('index')}}">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Back to site</span></a>
    </li>


    <!-- Heading -->
    <div class="sidebar-heading">
        USERS
    </div>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Nav Item - Users -->
    <li class="nav-item">
        <a class="nav-link" href="{{route('users.index')}}">
            <i class="fas fa-users"></i>
            <span>All Users</span></a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="{{route('users.create')}}">
            <i class="fas fa-plus-circle"></i>
            <span>Add User</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Nav Item - Roles -->
    <li class="nav-item">
        <a class="nav-link" href="{{route('roles.index')}}">
            <i class="fas fa-user-tag"></i>
            <span>All Roles</span></a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="{{route('roles.create')}}">
            <i class="fas fa-plus-circle"></i>
            <span>Add Role</span></a>
    </li>

    <!-- Heading -->
    <div class="sidebar-heading">
        BRANDS
    </div>
    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Nav Item - Brands -->
    <li class="nav-item">
        <a class="nav-link" href="{{route('brands.index')}}">
            <i class="fas fa-copyright"></i>
            <span>All Brands</span></a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="{{route('brands.create')}}">
            <i class="fas fa-plus-circle"></i>
            <span>Add Brand</span></a>
    </li>

    <!-- Heading -->
    <div class="sidebar-heading">
        CATEGORIES
    </div>
    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Nav Item - Categories -->
    <li class="nav-item">
        <a class="nav-link" href="{{route('categories.index')}}">
            <i class="fas fa-tags"></i>
            <span>All Categories</span></a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="{{route('categories.create')}}">
            <i class="fas fa-plus-circle"></i>
            <span>Add Category</span></a>
    </li>

    <!-- Heading -->
    <div class="sidebar-heading">
        PRODUCTS
    </div>
    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Nav Item - Colors -->
    <li class="nav-item">
        <a class="nav-link" href="{{route('colors.index')}}">
            <i class="fab fa-product-hunt"></i>
            <span>All Colors</span></a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="{{route('colors.create')}}">
            <i class="fas fa-plus-circle"></i>
            <span>Add Color</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

</ul>
