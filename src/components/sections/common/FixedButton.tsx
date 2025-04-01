import React from 'react'
import Link from 'next/link'
const base = 'p-common-fixed-button'

function FixedButton() {
  return (
    <div className={base}>
      <Link className={base+'__button'} href="https://www.google.com/maps/reserve/v/dine/c/f3blRVoO3A4?source=pa&opi=89978449&hl=ja-JP&gei=hH_nZ472N_Dm2roPuKfxmA8&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%25E7%2584%25BC%25E8%2582%2589%25E5%2585%2584%25E8%2580%2585%26rlz%3D1C5CHFA_enJP980JP980%26oq%3D%25E7%2584%25BC%25E8%2582%2589%25E5%2585%2584%25E8%2580%2585%26pf%3Dcs%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=1" target='_blank'>
        <span className={base+'__text c-fixed-button-text bk'}>予約する</span>
        <span className={base+'__icon'}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46752 3.49996C3.93339 3.49996 3.50039 3.93296 3.50039 4.46709V11.5356C3.50039 12.0697 3.93339 12.5027 4.46752 12.5027H11.536C12.0702 12.5027 12.5032 12.0697 12.5032 11.5356V9.76847C12.5032 9.32664 12.8613 8.96847 13.3032 8.96847C13.745 8.96847 14.1032 9.32664 14.1032 9.76847V11.5356C14.1032 12.9534 12.9538 14.1027 11.536 14.1027H4.46752C3.04973 14.1027 1.90039 12.9534 1.90039 11.5356V4.46709C1.90039 3.04931 3.04973 1.89996 4.46752 1.89996H6.23464C6.67647 1.89996 7.03465 2.25814 7.03465 2.69996C7.03465 3.14179 6.67647 3.49996 6.23464 3.49996H4.46752ZM7.2217 8.78138C6.90928 8.46896 6.90928 7.96243 7.2217 7.65001L11.3717 3.49996H9.76889C9.32707 3.49996 8.96889 3.14179 8.96889 2.69996C8.96889 2.25814 9.32707 1.89996 9.76889 1.89996H12.3031C13.2973 1.89996 14.1031 2.70585 14.1031 3.69996V6.23422C14.1031 6.67605 13.745 7.03422 13.3031 7.03422C12.8613 7.03422 12.5031 6.67605 12.5031 6.23422V4.6313L8.35307 8.78138C8.04065 9.0938 7.53412 9.0938 7.2217 8.78138Z" fill="white"/>
          </svg>
        </span>
      </Link>
    </div>
  )
}

export default FixedButton
