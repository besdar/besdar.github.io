import React, { FC, useContext } from 'react';
import { TooltipContext } from '../App';

const Component: FC = () => {
  // TODO: Change TooltipContext name / split contexts / something
  const { Language } = useContext(TooltipContext);

  return (
    <div className="title-contacts__contact contacts-links contacts-links_margin-top contacts-links_not-printed">
      <a
        className="contacts-link__link"
        rel="noopener"
        href="mailto:beskovda@yandex.ru"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>Email</title>
          <path
            d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
            fill="dodgerblue"
          />
        </svg>
      </a>
      {Language === 'EN' && (
        <>
          <a
            className="contacts-link__link"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/dmitry-beskov-83b63b1a4/"
            target="_blank"
          >
            <svg
              version="1.1"
              viewBox="0 0 144 144"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path fill="#0077B7" xmlns="http://www.w3.org/2000/svg" d="M72.04,14.166c-31.939,0-57.833,25.894-57.833,57.833c0,31.94,25.893,57.835,57.833,57.835  c31.941,0,57.836-25.895,57.836-57.835C129.875,40.06,103.981,14.166,72.04,14.166z M48.042,40.25c3.934,0,7.125,2.91,7.125,6.5  s-3.191,6.5-7.125,6.5c-3.936,0-7.125-2.91-7.125-6.5S44.106,40.25,48.042,40.25z M55.221,95.845H41.143V59.11h14.078V95.845z   M103.059,95.845H88.913v-20.2c0-2.306-0.428-3.938-1.281-4.896c-0.854-0.956-2.053-1.436-3.596-1.436  c-1.707,0-3.092,0.646-4.152,1.938c-1.061,1.292-1.59,3.609-1.59,6.953v17.641H64.215V59.11h13.109v5.983  c1.959-2.443,3.943-4.19,5.949-5.24c2.006-1.049,4.449-1.573,7.332-1.573c3.898,0,6.947,1.158,9.15,3.476  c2.201,2.317,3.303,5.897,3.303,10.74V95.845z" />
            </svg>
          </a>
          <a
            className="contacts-link__link"
            rel="noopener noreferrer"
            href="https://leetcode.com/besdar/"
            target="_blank"
          >
            <svg
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LeetCode</title>
              <path fill="gray" xmlns="http://www.w3.org/2000/svg" d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
            </svg>
          </a>
        </>
      )}
      {Language === 'RU' && (
        <a
          className="contacts-link__link"
          rel="noopener noreferrer"
          href="https://hh.ru/resume/927ff564ff0877d21a0039ed1f717a61656954"
          target="_blank"
        >
          <svg
            version="1.1"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>HeadHunter</title>
            <path
              d="M185.388 13.423 C 181.421 13.712,175.841 14.322,172.988 14.779 C 170.134 15.236,167.080 15.714,166.200 15.840 C 147.824 18.488,122.594 27.950,104.200 39.093 C 71.551 58.872,45.480 88.151,30.199 122.200 C -21.525 237.449,54.886 369.604,180.800 382.670 C 275.512 392.497,363.302 327.255,381.386 233.600 C 404.583 113.471,307.607 4.532,185.388 13.423 M117.044 115.283 C 119.175 116.447,119.159 116.240,119.381 144.962 C 119.641 178.418,119.068 176.717,127.712 169.719 C 145.254 155.518,175.478 158.637,185.532 175.686 C 191.809 186.331,192.064 188.706,192.119 237.224 C 192.164 277.047,192.230 275.847,189.937 277.032 C 188.393 277.831,166.813 278.034,164.962 277.267 C 162.475 276.237,162.622 278.453,162.370 238.200 C 162.120 197.996,162.075 197.252,159.644 192.487 C 152.822 179.115,130.336 181.525,123.143 196.400 C 119.781 203.351,119.545 206.280,119.378 243.106 C 119.227 276.283,119.290 275.322,117.159 276.898 C 116.027 277.735,94.378 278.031,92.305 277.238 C 89.553 276.186,89.812 284.165,89.697 196.725 C 89.586 112.132,89.492 116.293,91.531 115.354 C 93.899 114.262,115.067 114.204,117.044 115.283 M234.552 115.331 C 236.820 116.818,236.798 116.549,236.817 143.887 C 236.841 177.711,236.377 176.278,245.200 169.768 C 255.096 162.466,264.302 159.758,275.671 160.807 C 292.235 162.334,303.073 170.840,307.344 185.664 C 309.431 192.911,309.400 192.155,309.400 235.091 L 309.400 275.182 308.292 276.291 L 307.183 277.400 295.892 277.526 C 283.610 277.662,282.060 277.474,280.898 275.702 C 280.252 274.715,280.183 272.001,279.966 239.018 C 279.714 200.608,279.524 196.975,277.566 193.131 C 270.707 179.665,248.228 181.031,241.197 195.341 C 237.369 203.130,237.123 205.862,236.838 243.691 L 236.600 275.183 235.492 276.291 C 234.215 277.569,227.524 278.006,215.466 277.600 L 209.533 277.400 208.366 276.094 L 207.200 274.787 207.200 196.374 C 207.200 110.669,207.044 116.229,209.481 115.275 C 211.401 114.524,212.323 114.474,223.018 114.538 C 232.372 114.594,233.551 114.675,234.552 115.331 "
              fill="#d4041c"
            />
          </svg>
        </a>
      )}
      <a
        className="contacts-link__link"
        rel="noopener noreferrer"
        href="https://join.skype.com/invite/l8SmzmSqe4fD"
        target="_blank"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <title>Skype</title>
          <path
            d="M16.092 25.165c-5.364 0-7.76-2.639-7.76-4.619 0-1.020 0.748-1.728 1.777-1.728 2.297 0 1.697 3.303 5.983 3.303 2.188 0 3.4-1.193 3.4-2.415 0-0.735-0.359-1.547-1.805-1.905l-4.768-1.193c-3.84-0.965-4.537-3.048-4.537-5.001 0-4.063 3.815-5.588 7.399-5.588 3.295 0 7.191 1.831 7.191 4.265 0 1.045-0.917 1.653-1.937 1.653-1.959 0-1.597-2.716-5.552-2.716-1.959 0-3.056 0.885-3.056 2.156s1.537 1.677 2.876 1.983l3.516 0.783c3.855 0.865 4.832 3.128 4.832 5.259 0 3.301-2.536 5.765-7.629 5.765zM30.799 18.657l-0.039 0.18-0.059-0.32c0.020 0.060 0.059 0.099 0.079 0.16 0.16-0.9 0.241-1.817 0.241-2.736 0-2.039-0.401-4.016-1.197-5.893-0.759-1.797-1.86-3.416-3.236-4.795-1.399-1.377-2.996-2.475-4.793-3.235-1.757-0.841-3.735-1.24-5.771-1.24-0.96 0-1.925 0.093-2.857 0.272l0.159 0.080-0.319-0.044 0.159-0.033c-1.285-0.688-2.727-1.053-4.191-1.053-2.385 0-4.627 0.931-6.315 2.623-1.688 1.691-2.617 3.941-2.617 6.332 0 1.524 0.389 3.020 1.125 4.344l0.027-0.165 0.055 0.319-0.080-0.153c-0.152 0.86-0.229 1.732-0.229 2.607 0 2.040 0.4 4.023 1.179 5.888 0.757 1.816 1.837 3.435 3.236 4.812 1.379 1.4 2.996 2.476 4.793 3.256 1.859 0.8 3.836 1.197 5.872 1.197 0.879 0 1.779-0.080 2.636-0.239l-0.159-0.083 0.32 0.061-0.18 0.040c1.336 0.759 2.835 1.161 4.392 1.161 2.377 0 4.612-0.92 6.311-2.617 1.679-1.679 2.616-3.935 2.616-6.332 0-1.517-0.399-3.016-1.137-4.355z"
            fill="#00aff0"
          />
        </svg>
      </a>
      <a
        className="contacts-link__link"
        rel="noopener noreferrer"
        href="https://t.me/besdarrr"
        target="_blank"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <title>Telegram</title>
          <path
            d="M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM23.863 10.969l-2.625 12.369c-0.181 0.881-0.712 1.087-1.45 0.681l-4-2.956-1.919 1.869c-0.225 0.219-0.4 0.4-0.8 0.4-0.519 0-0.431-0.194-0.606-0.688l-1.363-4.475-3.956-1.231c-0.856-0.262-0.862-0.85 0.194-1.269l15.412-5.95c0.7-0.319 1.381 0.169 1.113 1.25z"
            fill="#37aee2"
          />
        </svg>
      </a>
      <a
        className="contacts-link__link"
        rel="noopener noreferrer"
        href="https://github.com/besdar"
        target="_blank"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <title>GitHub</title>
          <path
            d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"
            fill="grey"
          />
        </svg>
      </a>
    </div>
  );
};

export const Links = Component;