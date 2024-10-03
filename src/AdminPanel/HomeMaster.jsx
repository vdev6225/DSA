import React, { useState } from 'react';
import { Upload, Button, message, Tabs, Switch, Input } from 'antd';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import "./AdminPanel.css";
const { TabPane } = Tabs;
export default function HomeMaster() {
    const [fileListMobile, setFileListMobile] = useState([]);
    const [fileListDesktop, setFileListDesktop] = useState([]);
    const [previewImageMobile, setPreviewImageMobile] = useState(null);
    const [previewImageDesktop, setPreviewImageDesktop] = useState(null);
    const [activeMobile, setActiveMobile] = useState(false);
    const [activeDesktop, setActiveDesktop] = useState(false);
    const [linkMobile, setLinkMobile] = useState('');
    const [linkDesktop, setLinkDesktop] = useState('');
    const [showLinkMobile, setShowLinkMobile] = useState(false);
    const [showLinkDesktop, setShowLinkDesktop] = useState(false);

    const handleChangeMobile = ({ fileList: newFileList }) => {
        setFileListMobile(newFileList);
        if (newFileList.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => setPreviewImageMobile(e.target.result);
            reader.readAsDataURL(newFileList[0].originFileObj);
        } else {
            setPreviewImageMobile(null);
        }
    };

    const handleChangeDesktop = ({ fileList: newFileList }) => {
        setFileListDesktop(newFileList);
        if (newFileList.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => setPreviewImageDesktop(e.target.result);
            reader.readAsDataURL(newFileList[0].originFileObj);
        } else {
            setPreviewImageDesktop(null);
        }
    };

    const handleRemoveMobile = () => {
        setFileListMobile([]);
        setPreviewImageMobile(null);
    };

    const handleRemoveDesktop = () => {
        setFileListDesktop([]);
        setPreviewImageDesktop(null);
    };

    const beforeUpload = (file) => {
        const isImage = file.type.startsWith('image/');
        if (!isImage) {
            message.error('You can only upload image files!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must be smaller than 2MB!');
        }
        return isImage && isLt2M;
    };

    return (
        <div className="banner-upload-container">
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Mobile Banner" key="1">
                    <div className="tab-content">
                        <h2>Upload Mobile Banner</h2>
                        <div className="status-switch">
                            <span>Status: </span>
                            <Switch
                                checked={activeMobile}
                                onChange={setActiveMobile}
                                checkedChildren="Active"
                                unCheckedChildren="Inactive"
                            />
                        </div>

                        <Upload
                            listType="picture-card"
                            fileList={fileListMobile}
                            onChange={handleChangeMobile}
                            beforeUpload={beforeUpload}
                            onRemove={handleRemoveMobile}
                            maxCount={1}
                            showUploadList={false}
                        >
                            {fileListMobile.length === 0 ? (
                                <div className="upload-placeholder">
                                    <UploadOutlined /> Click to Upload Mobile Banner
                                </div>
                            ) : null}
                        </Upload>

                        {previewImageMobile && (
                            <div className="banner-preview">
                                <img src={previewImageMobile} alt="Mobile Banner Preview" className="banner-image" />
                                <Button icon={<DeleteOutlined />} onClick={handleRemoveMobile} danger>
                                    Remove Banner
                                </Button>
                            </div>
                        )}

                        <div className="link-toggle">
                            <span>Show Navigate Input: </span>
                            <Switch
                                checked={showLinkMobile}
                                onChange={setShowLinkMobile}
                                checkedChildren="Show"
                                unCheckedChildren="Hide"
                            />
                        </div>

                        {showLinkMobile && (
                            <Input
                                placeholder="Navigate to link"
                                value={linkMobile}
                                onChange={(e) => setLinkMobile(e.target.value)}
                                style={{ marginTop: '10px' }}
                            />
                        )}
                    </div>
                </TabPane>

                <TabPane tab="Desktop Banner" key="2">
                    <div className="tab-content">
                        <h2>Upload Desktop Banner</h2>
                        <div className="status-switch">
                            <span>Status: </span>
                            <Switch
                                checked={activeDesktop}
                                onChange={setActiveDesktop}
                                checkedChildren="Active"
                                unCheckedChildren="Inactive"
                            />
                        </div>

                        <Upload
                            listType="picture-card"
                            fileList={fileListDesktop}
                            onChange={handleChangeDesktop}
                            beforeUpload={beforeUpload}
                            onRemove={handleRemoveDesktop}
                            maxCount={1}
                            showUploadList={false}
                        >
                            {fileListDesktop.length === 0 ? (
                                <div className="upload-placeholder">
                                    <UploadOutlined /> Click to Upload Desktop Banner
                                </div>
                            ) : null}
                        </Upload>

                        {previewImageDesktop && (
                            <div className="banner-preview">
                                <img src={previewImageDesktop} alt="Desktop Banner Preview" className="banner-image" />
                                <Button icon={<DeleteOutlined />} onClick={handleRemoveDesktop} danger>
                                    Remove Banner
                                </Button>
                            </div>
                        )}

                        <div className="link-toggle">
                            <span>Show Navigate Input: </span>
                            <Switch
                                checked={showLinkDesktop}
                                onChange={setShowLinkDesktop}
                                checkedChildren="Show"
                                unCheckedChildren="Hide"
                            />
                        </div>

                        {showLinkDesktop && (
                            <Input
                                placeholder="Navigate to link"
                                value={linkDesktop}
                                onChange={(e) => setLinkDesktop(e.target.value)}
                                style={{ marginTop: '10px' }}
                            />
                        )}
                    </div>
                </TabPane>
            </Tabs>
            {/* Remove and Save Buttons */}
            <div className="button-group">
                <Button className="ant-btn-dangerous">Remove Banner</Button>
                <Button type="primary" style={{ marginLeft: '10px' }}>Save</Button>
            </div>
        </div>
    )
}