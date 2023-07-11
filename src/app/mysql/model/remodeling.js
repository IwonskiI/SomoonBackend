module.exports = (sequelizeConfig, Sequelize) => {
    //Set Model
    const remodeling = sequelizeConfig.define('remodeling',{
            title:  {
                type: Sequelize.STRING,
                comment: '제목'
            },
            apartment_name: {
                type: Sequelize.STRING,
                comment: '아파트 이름'
            },
            area: {
                type: Sequelize.INTEGER,
                comment: '평수'
            }
        },{
            charset: "utf8", // 한국어 설정
            collate: "utf8_general_ci", // 한국어 설정
            tableName: "remodeling", // 테이블 이름
            freezeTableName: true, // 복수형으로 바뀌지 않도록
            timestamps: false, // createAt & updateAt 활성화
            paranoid: false, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
            underscored: true // snake case 명명규칙을 따름
        }
    );

    return remodeling;
};
