const userManagementItems = [
  {
    title: "User Accounts",
    desc: "Manage registration, login, password recovery, profiles, sessions, and account status."
  },
  {
    title: "Organizations & Workspaces",
    desc: "Group users into companies, workspaces, departments, branches, teams, or other structures required by the product."
  },
  {
    title: "Team Invitations",
    desc: "Allow administrators or account owners to invite users and assign appropriate access."
  },
  {
    title: "Roles & Permissions",
    desc: "Define what users can view, create, edit, approve, export, manage, or administer."
  },
  {
    title: "Role-Based Access Control",
    desc: "Permissions should be enforced across the application and backend rather than relying only on interface-level restrictions."
  },
  {
    title: "Enterprise Authentication",
    desc: "For suitable products, authentication can include SSO or other enterprise identity requirements."
  },
  {
    title: "Support \u0026 Administrative Access",
    desc: "Controlled support access or administrative impersonation can be implemented when it is useful and appropriate for the product."
  },
  {
    title: "Session Management",
    desc: "Control active sessions, enforce session policies, handle concurrent access, and support secure logout across devices where the product requires it."
  }
]

export default function UserRoleManagement() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Access Control &amp; RBAC
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          SaaS User, Team &amp; Role Management
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Many SaaS products serve organizations rather than individual users, making account structure a core feature.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {userManagementItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Control Module 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {item.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}