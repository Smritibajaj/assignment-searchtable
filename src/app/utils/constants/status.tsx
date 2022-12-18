export const RFQ_STATUS_CONSTANTS = {
  draft: 'draft',
  released: 'released',
  inprogress: 'inprogress',
  cancelled: 'cancelled',
  expired: 'expired',
  shortlisted: 'shortlisted',
  notShortlisted: 'not-shortlisted',
  completed: 'completed',
}

export const RFQ_REQUEST_STATUS_CONSTANTS = {
  pending: 'pending',
  accepted: 'accepted',
  declined: 'declined',
  submitted: 'submitted',
  processing: 'processing',
  expired: 'expired',
  shortlisted: 'shortlisted',
  cancelled: 'cancelled',
  completed: 'completed',
}

export const STATUS_JSX: any = {
  unconfirmed: (
    <p className="truncate w-fit-content text-brand-primary-orange border border-brand-primary-orange rounded-sm text-center text-xs px-3  py-1 bg-brand-light-orange tracking-wider font-semibold">
      UNCONFIRMED
    </p>
  ),
  draft: (
    <p className="truncate w-fit-content text-brand-primary-yellow-status border border-brand-primary-yellow-status rounded-sm text-center text-xs px-3  py-1 bg-brand-light-orange tracking-wider font-semibold">
      DRAFT
    </p>
  ),
  active: (
    <p className="truncate w-fit-content text-brand-primary-green border border-brand-primary-green rounded-sm text-center text-xs px-3 py-1 bg-brand-light-green tracking-wider font-semibold">
      ACTIVE
    </p>
  ),
  completed: (
    <p className="truncate w-fit-content text-brand-primary-blue border border-brand-primary-blue rounded-sm text-center text-xs px-3 py-1 bg-brand-light-blue tracking-wider font-semibold">
      COMPLETED
    </p>
  ),
  inactive: (
    <p className="truncate w-fit-content text-brand-primary-red border border-brand-primary-red rounded-sm text-center text-xs px-3 py-1 bg-brand-light-red tracking-wider font-semibold">
      INACTIVE
    </p>
  ),
  processing: (
    <p className="truncate w-fit-content text-brand-primary-purple border border-brand-primary-purple rounded-sm text-center text-xs px-3 py-1 bg-brand-light-purple tracking-wider font-semibold">
      PROCESSING
    </p>
  ),
  inprogress: (
    <p className="truncate w-fit-content text-brand-primary-purple border border-brand-primary-purple rounded-sm text-center text-xs px-3 py-1 bg-brand-light-purple tracking-wider font-semibold">
      INPROGRESS
    </p>
  ),
  expired: (
    <p className="truncate w-fit-content text-brand-primary-gray border border-brand-primary-gray rounded-sm text-center text-xs px-3 py-1 bg-brand-light-gray tracking-wider font-semibold">
      EXPIRED
    </p>
  ),
  pending: (
    <p className="truncate w-fit-content text-brand-primary-yellow-status border border-brand-primary-yellow-status rounded-sm text-center text-xs px-3 py-1 bg-brand-light-yellow tracking-wider font-semibold">
      PENDING
    </p>
  ),
  released: (
    <p className="truncate w-fit-content text-brand-primary-blue border border-brand-primary-blue rounded-sm text-center text-xs px-3 py-1 bg-brand-light-blue tracking-wider font-semibold">
      RELEASED
    </p>
  ),
  accepted: (
    <p className="truncate w-fit-content text-brand-primary-blue border border-brand-primary-blue rounded-sm text-center text-xs px-3 py-1 bg-brand-light-blue tracking-wider font-semibold">
      ACCEPTED
    </p>
  ),
  declined: (
    <p className="truncate w-fit-content text-brand-primary-red border border-brand-primary-red rounded-sm text-center text-xs px-3 py-1 bg-brand-light-red tracking-wider font-semibold">
      DECLINED
    </p>
  ),
  approved: (
    <p className="truncate w-fit-content text-brand-primary-green border border-brand-primary-green rounded-sm text-center text-xs px-3 py-1 bg-brand-light-green tracking-wider font-semibold">
      APPROVED
    </p>
  ),
  shortlisted: (
    <p className="truncate w-fit-content text-brand-primary-green border border-brand-primary-green rounded-sm text-center text-xs px-3 py-1 bg-brand-light-green tracking-wider font-semibold">
      SHORTLISTED
    </p>
  ),
};
