import React from 'react'
import Card from '@components/Card'
import { useLocalization } from '../context/LocalizationWrapper';
import { Select } from 'antd'
import { languages } from '../constants/constants';
import Translate from '../components/Common/Translate';

export default function Home() {
    const { switchLocale } = useLocalization();

    const handleChange = (value) => {
        switchLocale(value);
    };

    return (
        <div className='flex flex-col gap-y-4'>
            <div className="flex items-center justify-center gap-y-4 flex-col mt-16">
                <h2 className='text-3xl text-white font-semibold'>
                    <Translate text='Localization Setup Integrated' />
                </h2>
                <Select
                    defaultValue={localStorage.getItem('locale') ?? 'en'}
                    className='h-16 w-20'
                    style={{
                        width: '200px'
                    }}
                    onChange={handleChange}
                    options={languages}
                />
            </div>

            <h2 className='text-3xl text-center text-white font-semibold mt-20'>
                <Translate text='Libraries used in this stater' />
            </h2>
            <div className="grid grid-cols-5 items-center justify-center px-16 gap-4 text-LightGray">
                <Card title="Ant Design" />
                <Card title="React Intl" />
                <Card title="React Query" />
                <Card title="Axios" />
                <Card title="Vite-Plugin-SVGR" />
                <Card title="React-Router-DOM" />
                <Card title="Lazy Loading" />
                <Card title="Dayjs" />
                <Card title="TailwindCSS" />
                <Card title="Sass" />
            </div>
        </div>
    )
}
