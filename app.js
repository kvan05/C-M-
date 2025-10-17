

// ====== DỮ LIỆU MÓN ĂN ======
const dishes = [
  {
  id: 'bun-rieu-cua',
  name: 'Bún riêu cua',
  category: ['Món nước', 'Ăn sáng'],
  image: 'images/25.jpg',
  description: 'Bún riêu cua đồng chuẩn vị quê, nước dùng chua nhẹ, riêu cua béo ngậy, ăn kèm đậu hũ chiên và rau sống tươi giòn.',
  ingredients: [
    { name: 'Cua đồng xay', amount: '400g' },
    { name: 'Thịt heo xay', amount: '100g' },
    { name: 'Trứng gà', amount: '1 quả' },
    { name: 'Cà chua', amount: '3 quả (bổ múi cau)' },
    { name: 'Đậu hũ chiên', amount: '3 miếng (cắt vừa ăn)' },
    { name: 'Bún tươi', amount: '1kg' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Giấm bỗng hoặc me chua', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Rau ăn kèm', amount: 'Rau muống bào, xà lách, tía tô, kinh giới...' }
  ],
  steps: [
    'Lọc cua đồng: Cho cua xay vào tô, thêm nước, khuấy đều rồi lọc lấy nước, bỏ bã.',
    'Đun nước cua trên lửa vừa, khuấy nhẹ tay cho đến khi riêu nổi lên, vớt phần riêu ra riêng.',
    'Phi thơm hành tím với dầu ăn, cho cà chua vào xào đến khi mềm, nêm chút muối và đường.',
    'Đổ phần cà chua xào vào nồi nước cua, thêm giấm bỗng hoặc me chua, nêm nước mắm cho vừa miệng.',
    'Trộn riêu cua với thịt heo xay và trứng gà, nặn viên nhỏ rồi cho vào nồi cho chín nổi lên.',
    'Thêm đậu hũ chiên vào nấu chung khoảng 5 phút cho thấm vị.',
    'Trụng bún qua nước sôi, cho ra tô, chan nước riêu và thêm riêu, đậu hũ, hành lá lên trên.'
  ],
  notes: 'Có thể thêm chả lụa hoặc huyết heo tùy khẩu vị. Dùng giấm bỗng giúp nước riêu dậy hương đặc trưng hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XaR2GECs2sA" title="Cách nấu bún riêu cua chuẩn vị truyền thống" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},

  {
    id: 'canh-chua-ca',
    name: 'Canh chua cá bông lau',
    category: ['Món canh','Món cá'],
    image: 'images/45.jpg',
    description: 'Canh chua miền Nam với dứa, cà chua, giá và cá tươi.',
    ingredients: [
      { name: 'Cá bông lau', amount: '500g' },
      { name: 'Dứa', amount: '150g' },
      { name: 'Cà chua', amount: '2 quả' },
      { name: 'Me chua', amount: '50g' }
    ],
    steps: [
      'Phi thơm hành, cho nước, thêm me hoặc nước cốt me.',
      'Cho dứa, cà chua vào, nấu sôi rồi cho cá.',
      'Nêm đường, muối, rau ngò gai và rau om trước khi tắt bếp.'
    ],
    notes: 'Chọn cá tươi và rửa sạch để canh không tanh.',
    video: 'https://www.youtube.com/embed/hijkLMNOPq'
  },
  {
  id: 'com-chien-duong-chau',
  name: 'Cơm chiên Dương Châu',
  category: ['Món cơm', 'Cơm nhà', 'Món trứng'],
  image: 'images/2.jpg',
  description: 'Cơm chiên Dương Châu vàng ươm, thơm lừng với trứng, tôm, lạp xưởng và rau củ đủ màu – món ngon quen thuộc mà ai ăn cũng ghiền.',
  ingredients: [
    { name: 'Cơm nguội', amount: '2 chén' },
    { name: 'Trứng gà', amount: '2 quả' },
    { name: 'Tôm tươi bóc vỏ', amount: '100g' },
    { name: 'Lạp xưởng', amount: '1 cây (luộc sơ, cắt hạt lựu)' },
    { name: 'Cà rốt', amount: '1/2 củ (cắt hạt lựu)' },
    { name: 'Đậu Hà Lan', amount: '2 muỗng canh' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Hạt nêm', amount: '1/2 muỗng cà phê' },
    { name: 'Tiêu', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Làm nóng chảo, cho dầu ăn vào rồi đổ trứng vào chiên chín, đánh tơi ra và để riêng.',
    'Cho lạp xưởng, cà rốt, đậu Hà Lan, tôm vào xào nhanh tay cho săn lại.',
    'Thêm cơm nguội vào, đảo đều để hạt cơm tơi và khô.',
    'Nêm nước mắm, hạt nêm và tiêu cho vừa miệng.',
    'Cho trứng chiên và hành lá vào đảo đều, tắt bếp.',
    'Múc ra đĩa, rắc thêm ít tiêu nếu thích và thưởng thức nóng.'
  ],
  notes: 'Cơm nguội để qua đêm giúp hạt cơm tơi và không bị nhão. Có thể thêm thịt xá xíu hoặc xúc xích để tăng hương vị.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/TIDcLWFTvQ8" title="Cách làm cơm chiên Dương Châu ngon chuẩn vị" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
  {
    id: 'trung-cuon',
    name: 'Trứng cuộn ',
    category: ['Món trứng', 'Cơm nhà'],
    image: 'images/1.jpg',
    description: 'Trứng cuộn kiểu mềm mịn, thơm hành, nhân cà rốt và hành tây.',
    ingredients: [
      { name: 'Trứng gà', amount: '4 quả' },
      { name: 'Cà rốt', amount: '1/2 củ (băm nhuyễn)' },
      { name: 'Hành tây', amount: '1/4 củ (băm nhỏ)' },
      { name: 'Hành lá', amount: '1 cây (thái nhỏ)' },
      { name: 'Dầu ăn', amount: '1 muỗng canh' },
      { name: 'Muối', amount: '1/4 muỗng cà phê' },
      { name: 'Tiêu', amount: '1 nhúm nhỏ' }
    ],
    steps: [
      'Đập trứng vào tô, thêm muối, tiêu, đánh tan.',
      'Cho cà rốt, hành tây, hành lá vào trộn đều.',
      'Làm nóng chảo chống dính, quét ít dầu.',
      'Đổ một lớp mỏng trứng vào chảo, nghiêng đều cho phủ mặt.',
      'Khi trứng hơi chín, dùng đũa hoặc sạn cuộn lại 1 phần.',
      'Dồn cuộn trứng sang một bên, đổ tiếp lớp trứng mới cho dính vào mép cuộn cũ, rồi cuộn tiếp.',
      'Lặp lại đến khi hết trứng, trứng chín đều vàng nhẹ.',
      'Lấy ra, để nguội 1–2 phút rồi cắt khoanh vừa ăn.'
    ],
    notes: 'Nên dùng chảo nhỏ, lửa vừa để trứng không cháy. Có thể thêm phô mai lát để béo hơn.',
    video: 'https://www.youtube.com/embed/hA5wyjKxkRA'
  },
  {
  id: 'ga-rang-la-chanh',
  name: 'Gà rang lá chanh',
  category: ['Món mặn', 'Món thịt gà','Cơm nhà'],
  image: 'images/4.jpg',
  description: 'Gà rang thơm nức mũi, vàng giòn bên ngoài, mềm bên trong, quyện hương lá chanh đặc trưng.',
  ingredients: [
    { name: 'Thịt gà (đùi hoặc cánh)', amount: '500g' },
    { name: 'Lá chanh', amount: '5–7 lá (thái sợi)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Sả', amount: '2 cây (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát)' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Muối', amount: '1/3 muỗng cà phê' },
    { name: 'Tiêu', amount: '1 nhúm nhỏ' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' }
  ],
  steps: [
    'Rửa sạch thịt gà, chặt miếng vừa ăn, để ráo.',
    'Ướp gà với muối, tiêu, nước mắm, đường, sả băm, tỏi băm trong 20–30 phút.',
    'Làm nóng chảo, cho dầu ăn vào, phi thơm phần tỏi và sả còn lại.',
    'Cho gà đã ướp vào rang trên lửa vừa đến khi thịt săn và vàng đều.',
    'Thêm ớt và lá chanh vào đảo nhanh tay cho thơm.',
    'Nêm nếm lại cho vừa miệng, tiếp tục rang thêm 2–3 phút cho thịt thấm gia vị.',
    'Tắt bếp, rắc thêm ít lá chanh sợi lên trên trước khi dọn ra đĩa.'
  ],
  notes: 'Nên dùng gà ta để thịt dai và ngọt hơn. Có thể thêm ít mật ong khi rang để gà lên màu đẹp và thơm hơn.',
  video: 'https://www.youtube.com/embed/THu3J0_KQnI'
},
{
  id: 'ca-kho-to',
  name: 'Cá kho tộ',
  category: ['Món mặn','Món cá', 'Cơm nhà'],
  image: 'images/6.jpg',
  description: 'Cá kho tộ đậm đà hương vị quê nhà, thịt cá săn chắc, thấm nước màu cánh gián, thơm tiêu và hành.',
  ingredients: [
    { name: 'Cá basa hoặc cá trê', amount: '500g' },
    { name: 'Thịt ba rọi', amount: '100g (thái lát mỏng)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Ớt', amount: '1 quả (thái lát)' },
    { name: 'Đường', amount: '1 muỗng canh (làm nước màu)' },
    { name: 'Nước mắm', amount: '2 muỗng canh' },
    { name: 'Nước dừa tươi', amount: '150ml' },
    { name: 'Tiêu', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' }
  ],
  steps: [
    'Rửa sạch cá, cắt khúc vừa ăn, để ráo. Thịt ba rọi rửa sạch, cắt mỏng.',
    'Ướp cá với nước mắm, tiêu, hành tím, tỏi, ớt trong 20–30 phút.',
    'Bắc nồi đất hoặc nồi dày, cho đường vào thắng đến khi ngả màu cánh gián, thêm chút nước và dầu ăn để làm nước màu.',
    'Cho thịt ba rọi vào đảo săn, rồi cho cá đã ướp vào.',
    'Đổ nước dừa tươi vào xâm xấp mặt cá, kho lửa lớn đến khi sôi.',
    'Hạ nhỏ lửa, kho liu riu cho nước sệt lại, cá thấm đều và lên màu đẹp.',
    'Rắc tiêu và vài lát ớt lên trên trước khi tắt bếp.'
  ],
  notes: 'Nên dùng nồi đất để cá thơm và giữ nhiệt lâu. Kho càng lâu cá càng thấm vị và ngon cơm hơn.',
  video: 'https://www.youtube.com/embed/NlTqR3hQZPQ'
},
{
  id: 'thit-kho-trung-cut',
  name: 'Thịt kho trứng cút',
  category: ['Món mặn', 'Món thị heo','Cơm nhà'],
  image: 'images/7.jpg',
  description: 'Thịt ba rọi kho mềm thấm vị, trứng cút bùi béo, nước kho sánh đậm, ăn cùng cơm trắng cực hao cơm.',
  ingredients: [
    { name: 'Thịt ba rọi', amount: '500g' },
    { name: 'Trứng cút', amount: '10–12 quả' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Nước mắm', amount: '3 muỗng canh' },
    { name: 'Đường', amount: '1.5 muỗng canh (để thắng nước màu)' },
    { name: 'Nước dừa tươi', amount: '200ml' },
    { name: 'Tiêu', amount: '1/2 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' },
    { name: 'Muối', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Luộc trứng cút, bóc vỏ, để ráo.',
    'Rửa sạch thịt ba rọi, cắt miếng vuông vừa ăn, trụng qua nước sôi để khử mùi.',
    'Ướp thịt với nước mắm, tiêu, hành tím, tỏi và muối trong 20 phút.',
    'Thắng đường với chút dầu ăn đến khi chuyển màu cánh gián, cho thịt vào đảo săn.',
    'Đổ nước dừa tươi vào xâm xấp mặt thịt, đun sôi rồi hạ nhỏ lửa, kho liu riu khoảng 20 phút.',
    'Thêm trứng cút vào, tiếp tục kho đến khi nước sánh, thịt mềm và thấm vị.',
    'Nêm nếm lại vừa miệng, rắc ít tiêu xay lên trước khi tắt bếp.'
  ],
  notes: 'Kho bằng nước dừa giúp thịt béo ngọt tự nhiên. Có thể thay trứng cút bằng trứng gà nhỏ tùy khẩu vị.',
  video: 'https://www.youtube.com/embed/yAEtzPqvBsw'
},
{
  id: 'suon-xao-chua-ngot',
  name: 'Sườn xào chua ngọt',
  category: ['Món mặn', 'Cơm nhà', 'Món thịt heo'],
  image: 'images/12.jpg',
  description: 'Sườn heo giòn ngoài mềm trong, áo đều lớp sốt chua ngọt, thêm ớt chuông rực rỡ bắt mắt – món “bắt cơm” quốc dân.',
  ingredients: [
    { name: 'Sườn non heo', amount: '500g' },
    { name: 'Ớt chuông đỏ', amount: '1/2 trái (cắt vuông)' },
    { name: 'Ớt chuông vàng', amount: '1/2 trái (cắt vuông)' },
    { name: 'Hành tím', amount: '2 củ (băm nhỏ)' },
    { name: 'Tỏi', amount: '3 tép (băm nhỏ)' },
    { name: 'Nước mắm', amount: '1 muỗng canh' },
    { name: 'Giấm hoặc nước cốt chanh', amount: '1 muỗng canh' },
    { name: 'Đường', amount: '1.5 muỗng canh' },
    { name: 'Tương cà', amount: '2 muỗng canh' },
    { name: 'Nước lọc', amount: '2 muỗng canh' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Hành lá', amount: '2 nhánh (cắt khúc)' },
    { name: 'Muối', amount: '1/3 muỗng cà phê' }
  ],
  steps: [
    'Rửa sạch sườn, chặt miếng vừa ăn, trụng qua nước sôi cho sạch bọt.',
    'Ướp sườn với muối, tiêu, hành tím và tỏi trong 20 phút.',
    'Pha nước sốt chua ngọt: giấm (hoặc chanh) + đường + nước mắm + tương cà + nước lọc, khuấy đều.',
    'Chiên sườn trong chảo dầu đến khi vàng đều, vớt ra để ráo.',
    'Đổ bớt dầu, phi thơm tỏi, cho sườn vào đảo, thêm nước sốt vào rim lửa vừa cho sệt lại.',
    'Thêm ớt chuông vào xào nhanh tay để giữ độ giòn và màu tươi.',
    'Tắt bếp, rắc hành lá lên trên và dọn ra đĩa.'
  ],
  notes: 'Có thể thêm chút mật ong để vị chua ngọt dịu hơn. Món này ngon nhất khi ăn nóng cùng cơm trắng.',
  video: 'https://www.youtube.com/embed/qLEyU6bWxxg'
},
{
  id: 'canh-rong-bien-tom',
  name: 'Canh rong biển tôm',
  category: ['Món canh', 'Món tôm', 'Cơm nhà'],
  image: 'images/8.jpg',
  description: 'Canh rong biển tôm thanh ngọt, mát lành – món canh nhẹ bụng cho những ngày nắng nóng hay muốn đổi vị sau bữa ăn nhiều dầu mỡ.',
  ingredients: [
    { name: 'Rong biển khô', amount: '10g (ngâm mềm, cắt nhỏ)' },
    { name: 'Tôm tươi', amount: '150g (bóc vỏ, rút chỉ lưng)' },
    { name: 'Nấm rơm hoặc nấm mỡ', amount: '100g (cắt lát)' },
    { name: 'Gừng', amount: '2 lát mỏng' },
    { name: 'Hành lá', amount: '1 nhánh (cắt nhỏ)' },
    { name: 'Nước lọc', amount: '800ml' },
    { name: 'Dầu ăn', amount: '1 muỗng cà phê' },
    { name: 'Muối', amount: '1/2 muỗng cà phê' },
    { name: 'Nước mắm', amount: '1 muỗng cà phê' },
    { name: 'Tiêu', amount: '1 ít (tùy chọn)' }
  ],
  steps: [
    'Rửa sạch rong biển khô, ngâm cho nở rồi cắt nhỏ vừa ăn.',
    'Phi gừng và đầu hành với dầu ăn cho thơm, cho tôm vào xào săn.',
    'Đổ nước lọc vào, đun sôi rồi hớt bọt cho nước trong.',
    'Cho nấm vào nấu chín, nêm muối và nước mắm vừa miệng.',
    'Cuối cùng cho rong biển vào, nấu thêm 1 phút rồi tắt bếp.',
    'Múc ra tô, rắc hành lá và tiêu, dùng nóng.'
  ],
  notes: 'Không nên nấu rong biển quá lâu để giữ độ giòn và hương vị tự nhiên. Có thể thêm đậu hũ non để canh thêm béo và bổ dưỡng.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/sEGhbxE7AVw" title="Cách nấu canh rong biển tôm thanh mát đơn giản tại nhà" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-ngam-tuong',
  name: 'Tôm ngâm tương',
  category: ['Món tôm', 'Cơm nhà',],
  image: 'images/9.jpg',
  description: 'Tôm ngâm tương – món ăn Hàn Quốc độc đáo với hương vị mặn ngọt hài hòa, thịt tôm tươi ngọt quyện cùng nước tương thơm nồng, ăn với cơm trắng cực hao cơm.',
  ingredients: [
    { name: 'Tôm tươi to (loại tôm sú hoặc tôm thẻ)', amount: '500g' },
    { name: 'Nước tương Hàn Quốc (hoặc nước tương đậm)', amount: '200ml' },
    { name: 'Nước lọc', amount: '100ml' },
    { name: 'Đường nâu', amount: '2 muỗng canh' },
    { name: 'Tỏi', amount: '5 tép (băm nhỏ)' },
    { name: 'Ớt tươi', amount: '2 trái (cắt lát)' },
    { name: 'Gừng', amount: '3 lát mỏng' },
    { name: 'Hành lá', amount: '2 nhánh (cắt khúc)' },
    { name: 'Rượu mirin hoặc rượu trắng', amount: '1 muỗng canh' },
    { name: 'Tiêu đen', amount: '1/4 muỗng cà phê' }
  ],
  steps: [
    'Rửa sạch tôm, cắt bỏ râu và phần gai nhọn trên đầu, để ráo nước.',
    'Đun nước sôi, chần tôm 20–30 giây rồi vớt ra ngâm nước đá cho tôm săn giòn, để nguội.',
    'Đun nước tương, nước lọc, đường nâu, tỏi, gừng, hành lá, ớt và mirin đến khi sôi, tắt bếp và để nguội hoàn toàn.',
    'Xếp tôm vào hũ thủy tinh sạch, rót hỗn hợp nước tương đã nguội vào ngập tôm.',
    'Đậy kín nắp, bảo quản trong tủ lạnh ít nhất 8 tiếng (ngon nhất sau 1 ngày).',
    'Khi ăn, gắp tôm ra, bóc vỏ và chấm thêm với ít nước ngâm tương hoặc ăn kèm cơm nóng.'
  ],
  notes: 'Tôm phải thật tươi để giữ vị ngọt tự nhiên. Có thể thay tôm bằng trứng gà luộc, cá hồi hoặc sò nếu muốn biến tấu.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4XlFcZxLjeY" title="Cách làm tôm ngâm tương kiểu Hàn Quốc chuẩn vị" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-chien-xu',
  name: 'Tôm Chiên Xù',
  category: ['Món tôm', 'Món chiên', 'Cơm nhà'],
  image: 'images/31.jpg',
  description: 'Tôm chiên xù – món ăn vàng ruộm giòn tan, thịt tôm ngọt tự nhiên quyện lớp vỏ xù giòn rụm, chấm cùng tương ớt hoặc mayonnaise là “hết sảy con bà bảy”.',
  ingredients: [
    { name: 'Tôm tươi (tôm sú hoặc tôm thẻ)', amount: '300g' },
    { name: 'Bột chiên giòn', amount: '100g' },
    { name: 'Bột chiên xù', amount: '100g' },
    { name: 'Trứng gà', amount: '2 quả' },
    { name: 'Dầu ăn', amount: '200ml' },
    { name: 'Muối, tiêu, chanh', amount: 'vừa đủ' }
  ],
  steps: [
    'Tôm rửa sạch, bóc vỏ chừa đuôi, rút chỉ lưng cho đẹp.',
    'Ướp với muối, tiêu và chút nước cốt chanh khoảng 10 phút cho thấm vị.',
    'Lăn tôm lần lượt qua bột chiên giòn → trứng đánh tan → bột chiên xù.',
    'Đun dầu nóng, chiên ngập tôm ở lửa vừa cho đến khi vàng giòn đều hai mặt.',
    'Vớt ra để ráo dầu, ăn kèm với tương ớt hoặc mayonnaise.'
  ],
  notes: 'Chiên tôm với dầu nóng vừa phải, không chiên quá lâu để tôm không bị khô. Có thể thêm ít bột bắp vào bột chiên giòn để vỏ giòn lâu hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/7F1YqP0dFvQ" title="Cách làm tôm chiên xù giòn tan hấp dẫn tại nhà" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'cha-gio-nhan-tom',
  name: 'Chả Giò Nhân Tôm',
  category: ['Món tôm', 'Món chiên', 'Cơm nhà'],
  image: 'images/46.jpg',
  description: 'Chả giò nhân tôm – cuốn giòn rụm bên ngoài, nhân tôm ngọt béo hòa quyện cùng rau củ thơm bùi. Món ăn “quốc dân” của mọi bữa tiệc Việt, chấm cùng nước mắm chua ngọt là chuẩn bài luôn!',
  ingredients: [
    { name: 'Tôm tươi (bóc vỏ, băm nhỏ)', amount: '200g' },
    { name: 'Thịt heo xay', amount: '150g' },
    { name: 'Miến khô', amount: '50g (ngâm mềm, cắt nhỏ)' },
    { name: 'Cà rốt', amount: '1 củ (bào sợi)' },
    { name: 'Mộc nhĩ', amount: '3 tai (ngâm nở, thái nhỏ)' },
    { name: 'Hành tím, tỏi băm', amount: '1 muỗng canh' },
    { name: 'Trứng gà', amount: '1 quả' },
    { name: 'Bánh tráng rế hoặc bánh tráng mỏng cuốn chả giò', amount: '10–12 lá' },
    { name: 'Dầu ăn', amount: '200ml' },
    { name: 'Gia vị: muối, tiêu, hạt nêm, nước mắm, đường', amount: 'vừa đủ' }
  ],
  steps: [
    'Trộn đều tôm, thịt xay, miến, cà rốt, mộc nhĩ, hành tỏi băm và trứng gà trong tô lớn. Nêm muối, tiêu, hạt nêm, nước mắm cho vừa ăn.',
    'Trải bánh tráng ra mặt phẳng, múc 1 muỗng nhân vào giữa, cuốn chặt tay.',
    'Bắc chảo dầu, đun nóng, chiên chả giò ở lửa vừa cho đến khi vàng đều hai mặt.',
    'Vớt ra để ráo dầu, thưởng thức khi nóng cùng nước mắm chua ngọt và rau sống.'
  ],
  notes: 'Có thể thêm củ sắn hoặc khoai môn bào nhỏ vào nhân để tăng độ ngọt và giòn. Chiên 2 lần (lần đầu sơ, lần hai trước khi ăn) giúp chả giò giòn lâu.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/T7x1yS0T3nM" title="Cách làm chả giò nhân tôm giòn rụm, ngon chuẩn vị Việt Nam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'cha-ram-tom-dat',
  name: 'Chả Ram Tôm Đất',
  category: ['Món tôm', 'Món chiên', 'Đặc sản miền Trung'],
  image: 'images/47.jpg',
  description: 'Chả ram tôm đất – món đặc sản miền Trung “nhỏ mà có võ”! Vỏ bánh tráng giòn rụm ôm trọn con tôm đất ngọt thịt, chấm cùng nước mắm tỏi ớt cay cay mặn mặn là hết sảy luôn 🍤🔥',
  ingredients: [
    { name: 'Tôm đất tươi (bóc vỏ, chừa đuôi)', amount: '300g' },
    { name: 'Thịt ba chỉ', amount: '100g (băm nhuyễn hoặc cắt nhỏ)' },
    { name: 'Bánh tráng cuốn ram', amount: '10–12 lá' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Hành tím băm', amount: '1 muỗng cà phê' },
    { name: 'Hành lá', amount: '1 nhánh (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '200ml' },
    { name: 'Gia vị: muối, tiêu, nước mắm, hạt nêm, đường', amount: 'vừa đủ' }
  ],
  steps: [
    'Rửa sạch tôm đất, bỏ chỉ lưng, để ráo nước. Thịt ba chỉ băm nhuyễn, ướp cùng tỏi, hành tím, tiêu, hạt nêm và ít nước mắm.',
    'Trải bánh tráng, đặt 1 lát thịt và 1 con tôm lên, cuốn chặt tay để khi chiên không bị bung.',
    'Bắc chảo dầu, đun nóng và chiên chả ram ở lửa vừa cho đến khi vàng đều, vỏ giòn rụm.',
    'Vớt ra để ráo dầu, ăn kèm rau sống, bún tươi và chén nước mắm chua ngọt.'
  ],
  notes: 'Mẹo nhỏ: phơi bánh tráng qua nắng nhẹ trước khi cuốn giúp cuốn dễ và không bị nứt. Dầu chiên phải đủ ngập để ram vàng đều.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vpYw0tKcT7k" title="Cách làm chả ram tôm đất giòn rụm chuẩn vị miền Trung | Món ngon Việt Nam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'banh-xeo-nhan-tom',
  name: 'Bánh xèo nhân tôm',
  category: ['Món Việt Nam', 'Món chiên', 'Món tôm'],
  image: 'images/48.jpg',
  description: 'Bánh xèo nhân tôm – món ăn dân dã mang hương vị quê nhà 🇻🇳. Vỏ bánh vàng giòn, nhân tôm thịt đậm đà, giá đỗ tươi giòn, ăn kèm rau sống và nước mắm chua ngọt – chuẩn vị Việt Nam luôn!',
  ingredients: [
    { name: 'Bột bánh xèo (hoặc bột gạo pha sẵn)', amount: '200g' },
    { name: 'Nước cốt dừa', amount: '150ml' },
    { name: 'Nước lọc', amount: '200ml' },
    { name: 'Nghệ bột', amount: '1/2 muỗng cà phê (tạo màu vàng đẹp)' },
    { name: 'Tôm tươi (bóc vỏ, chừa đuôi)', amount: '200g' },
    { name: 'Thịt ba chỉ', amount: '100g (cắt mỏng)' },
    { name: 'Giá đỗ', amount: '100g' },
    { name: 'Hành lá', amount: '2 nhánh (cắt nhỏ)' },
    { name: 'Rau sống', amount: 'xà lách, cải bẹ, diếp cá, tía tô...' },
    { name: 'Nước mắm pha', amount: 'chua ngọt, tỏi ớt, cà rốt bào sợi' },
    { name: 'Dầu ăn', amount: 'vừa đủ' },
    { name: 'Gia vị', amount: 'muối, tiêu, hạt nêm, đường' }
  ],
  steps: [
    'Pha bột bánh: Trộn bột bánh xèo với nước cốt dừa, nước lọc, nghệ bột và hành lá, khuấy đều để bột nghỉ 30 phút.',
    'Làm nhân: Xào sơ thịt ba chỉ và tôm với ít gia vị cho săn, để riêng.',
    'Làm bánh: Đun nóng chảo, cho ít dầu, múc một vá bột láng đều mặt chảo, cho tôm thịt và giá đỗ vào giữa.',
    'Đậy nắp khoảng 2 phút cho bánh chín, mở nắp chiên thêm đến khi viền bánh vàng giòn, gập đôi bánh lại.',
    'Ăn kèm với rau sống và nước mắm chua ngọt.'
  ],
  notes: 'Chiên bánh trên chảo chống dính và lửa vừa để vỏ bánh giòn đều mà không cháy. Có thể thay tôm bằng mực hoặc nấm nếu muốn ăn chay.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XC9yF7v6WBY" title="Cách làm bánh xèo nhân tôm giòn lâu chuẩn vị miền Nam | Vietnamese Pancake Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-nuong-phomai',
  name: 'Tôm nướng phô mai',
  category: ['Món nướng', 'Món tôm',],
  image: 'images/49.jpg',
  description: 'Tôm nướng phô mai 🧀🦐 – món ăn “gây nghiện” bởi sự hòa quyện giữa vị ngọt tươi của tôm và lớp phô mai béo ngậy, thơm lừng. Cắn một miếng là kéo sợi phô mai tan chảy, ngon quên lối về!',
  ingredients: [
    { name: 'Tôm sú tươi', amount: '500g (rửa sạch, bỏ chỉ lưng)' },
    { name: 'Phô mai mozzarella', amount: '100g (bào sợi)' },
    { name: 'Bơ lạt', amount: '20g' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Sữa tươi không đường', amount: '2 muỗng canh' },
    { name: 'Muối', amount: '1/3 muỗng cà phê' },
    { name: 'Tiêu xay', amount: '1/4 muỗng cà phê' },
    { name: 'Rau mùi hoặc ngò tây', amount: '1 ít (trang trí)' }
  ],
  steps: [
    'Rửa sạch tôm, bỏ chỉ lưng, để ráo nước.',
    'Làm tan bơ, phi thơm tỏi băm rồi cho sữa tươi, muối và tiêu vào, khuấy đều.',
    'Ướp tôm với hỗn hợp bơ tỏi trong khoảng 15 phút cho thấm gia vị.',
    'Xếp tôm ra khay, rắc phô mai mozzarella phủ đều lên mặt.',
    'Nướng ở nhiệt độ 180°C trong 10–12 phút (hoặc đến khi phô mai tan chảy và hơi vàng).',
    'Trang trí thêm rau mùi cho đẹp mắt, thưởng thức ngay khi còn nóng.'
  ],
  notes: 'Không nên nướng quá lâu để tôm không bị khô. Có thể thay mozzarella bằng cheddar hoặc mix cả hai loại phô mai để tăng độ béo thơm.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Y3kRZ_p1FhM" title="Cách làm tôm nướng phô mai thơm béo, kéo sợi cực hấp dẫn | Grilled Shrimp with Cheese" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-xao-rau-cu',
  name: 'Tôm xào rau củ',
  category: ['Món xào', 'Món tôm'],
  image: 'images/50.jpg',
  description: 'Tôm xào rau củ – món ăn vừa ngon miệng vừa nhiều dinh dưỡng 🥦🦐. Tôm giòn ngọt, rau củ tươi xanh, hòa quyện trong vị đậm đà, thanh mát, cực hợp cho bữa cơm gia đình!',
  ingredients: [
    { name: 'Tôm tươi', amount: '300g (bóc vỏ, bỏ chỉ lưng)' },
    { name: 'Bông cải xanh (broccoli)', amount: '150g (cắt khúc nhỏ)' },
    { name: 'Cà rốt', amount: '1 củ (tỉa hoa, cắt lát mỏng)' },
    { name: 'Đậu Hà Lan', amount: '100g' },
    { name: 'Ngô non (bắp non)', amount: '100g' },
    { name: 'Nấm mèo (mộc nhĩ)', amount: '2 tai (ngâm nở, cắt sợi)' },
    { name: 'Ớt chuông đỏ', amount: '1/2 trái (cắt lát)' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Dầu ăn', amount: '2 muỗng canh' },
    { name: 'Gia vị', amount: 'muối, hạt nêm, tiêu, nước mắm, đường' }
  ],
  steps: [
    'Tôm rửa sạch, bóc vỏ, bỏ chỉ lưng và để ráo.',
    'Luộc sơ rau củ (bông cải, cà rốt, ngô non, đậu Hà Lan) trong nước sôi 1–2 phút, vớt ra để ráo.',
    'Phi thơm tỏi trong chảo dầu, cho tôm vào xào đến khi săn lại, thêm ít gia vị.',
    'Cho toàn bộ rau củ và nấm mèo vào đảo đều tay cùng tôm, nêm nếm lại cho vừa miệng.',
    'Xào thêm 2 phút, khi rau củ còn giữ độ giòn thì tắt bếp, dọn ra đĩa và thưởng thức.'
  ],
  notes: 'Không nên xào quá lâu để rau củ giữ được màu xanh và độ giòn. Có thể thêm dầu hào để món ăn đậm vị hơn.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jmH39L4Y1xI" title="Cách làm tôm xào rau củ giòn ngọt, thanh mát | Stir-fried Shrimp with Vegetables Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-rang-muoi',
  name: 'Tôm rang muối',
  category: ['Món tôm'],
  image: 'images/51.jpg',
  description: 'Tôm rang muối – món ngon giòn rụm bên ngoài, ngọt mềm bên trong 🦐✨. Lớp muối rang mằn mặn hòa quyện cùng vị tôm tươi, thơm lừng cực cuốn, ăn chơi hay ăn cơm đều hết sảy!',
  ingredients: [
    { name: 'Tôm sú (hoặc tôm thẻ to)', amount: '400g (rửa sạch, để nguyên vỏ)' },
    { name: 'Bột năng', amount: '2 muỗng canh' },
    { name: 'Lòng trắng trứng', amount: '1 cái' },
    { name: 'Muối hột', amount: '2 muỗng canh' },
    { name: 'Gạo nếp', amount: '2 muỗng canh' },
    { name: 'Đậu xanh cà vỏ', amount: '1 muỗng canh' },
    { name: 'Tỏi băm', amount: '1 muỗng cà phê' },
    { name: 'Ớt tươi', amount: '1 trái (băm nhỏ)' },
    { name: 'Dầu ăn', amount: 'vừa đủ để chiên' },
    { name: 'Gia vị', amount: 'muối, tiêu, hạt nêm, đường' }
  ],
  steps: [
    'Rang gạo nếp, đậu xanh và muối hột riêng từng loại cho vàng thơm, sau đó xay nhuyễn chung thành hỗn hợp “muối rang”.',
    'Tôm rửa sạch, cắt râu, để ráo rồi ướp với chút tiêu, hạt nêm và lòng trắng trứng trong 10 phút.',
    'Áo đều tôm với bột năng, cho vào chảo dầu nóng chiên đến khi vàng giòn, vớt ra để ráo dầu.',
    'Làm nóng chảo khác, cho tỏi và ớt vào phi thơm, rồi cho tôm chiên và muối rang vào đảo đều cho muối bám đều lên tôm.',
    'Tắt bếp, dọn ra đĩa, rắc thêm chút muối rang lên trên cho đẹp mắt và thưởng thức ngay khi còn nóng.'
  ],
  notes: 'Có thể thêm lá chanh thái sợi hoặc sả chiên giòn để món ăn dậy mùi thơm đặc trưng. Không nên chiên tôm quá lâu để giữ độ ngọt tự nhiên.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/2cOr4rSk5ug" title="Cách làm tôm rang muối giòn rụm, mặn mà chuẩn vị nhà hàng | Crispy Salted Shrimp Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},
{
  id: 'tom-sot-bo-toi',
  name: 'Tôm sốt bơ tỏi',
  category: ['Món tôm'],
  image: 'images/52.jpg',
  description: 'Tôm sốt bơ tỏi – món ăn “gây nghiện” bởi hương thơm béo ngậy của bơ hòa cùng vị tôm tươi ngọt 🧈🦐. Mỗi miếng tôm phủ lớp sốt vàng óng, thơm nức mũi, ăn cùng cơm nóng thì chỉ có “hết sạch nồi”!',
  ingredients: [
    { name: 'Tôm sú (hoặc tôm thẻ to)', amount: '400g (bóc vỏ, chừa đuôi)' },
    { name: 'Bơ lạt', amount: '40g' },
    { name: 'Tỏi băm', amount: '4 tép (băm nhuyễn)' },
    { name: 'Ớt băm', amount: '1 trái (tùy chọn)' },
    { name: 'Nước mắm ngon', amount: '1 muỗng canh' },
    { name: 'Đường', amount: '1 muỗng cà phê' },
    { name: 'Tiêu đen', amount: '1/4 muỗng cà phê' },
    { name: 'Chanh (vắt lấy nước cốt)', amount: '1/2 quả' },
    { name: 'Hành lá', amount: '1 nhánh (cắt nhỏ)' },
    { name: 'Dầu ăn', amount: '1 muỗng canh' }
  ],
  steps: [
    'Rửa sạch tôm, để ráo rồi ướp với chút tiêu, nước mắm, đường và nước cốt chanh khoảng 10 phút cho thấm vị.',
    'Làm nóng chảo, cho dầu ăn vào áp chảo tôm cho đến khi hai mặt tôm chuyển màu đỏ cam đẹp mắt, gắp ra để riêng.',
    'Trong cùng chảo, cho bơ vào đun chảy, rồi phi tỏi và ớt cho thơm vàng.',
    'Cho tôm đã áp chảo trở lại, đảo nhanh tay cho tôm áo đều lớp sốt bơ tỏi.',
    'Rắc hành lá, tiêu và tắt bếp ngay khi tôm vừa thấm đều gia vị. Dọn ra đĩa, dùng nóng.'
  ],
  notes: 'Không nên nấu quá lâu để tôm không bị khô. Có thể thêm chút mật ong hoặc nước cốt chanh để sốt bơ tỏi dậy vị và cân bằng độ béo.',
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/8Bv1p7kBjqE" title="Cách làm tôm sốt bơ tỏi thơm béo cực hấp dẫn | Butter Garlic Shrimp Recipe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
},



];

// ------------ DOM references ------------
const cardsContainer = document.getElementById('cardsContainer');
const categoryList = document.getElementById('categoryList');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const yearSpan = document.getElementById('year');

// ------------ State ------------
let selectedCategories = new Set();
let searchQuery = '';
let debounceTimer = null;
const DEBOUNCE_MS = 400;

// ------------ Helpers ------------
function normalize(str) {
  return (str || '').toLowerCase();
}

// ------------ Render Cards ------------
function createCard(dish) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img src="${dish.image}" alt="${dish.name}">
    <div class="card-body">
      <h3 class="card-title">${dish.name}</h3>
      <div class="card-sub">${dish.category.join(', ')}</div>
    </div>
  `;
  card.addEventListener('click', () => openModal(dish.id));
  return card;
}

function renderCards(list) {
  cardsContainer.innerHTML = '';
  if (list.length === 0) {
    cardsContainer.innerHTML = `<div style="padding:40px;text-align:center;color:var(--muted)">Không có món phù hợp.</div>`;
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(d => frag.appendChild(createCard(d)));
  cardsContainer.appendChild(frag);
}

// ------------ Category Filter ------------
function getUniqueCategories() {
  const set = new Set();
  dishes.forEach(d => d.category.forEach(c => set.add(c)));
  return Array.from(set).sort();
}

function renderCategoryCheckboxes() {
  const cats = getUniqueCategories();
  categoryList.innerHTML = cats
    .map(
      cat => `
      <label class="category-item">
        <input type="checkbox" value="${cat}">
        <span>${cat}</span>
      </label>
    `
    )
    .join('');

  categoryList.querySelectorAll('input').forEach(cb => {
    cb.addEventListener('change', e => {
      if (e.target.checked) selectedCategories.add(e.target.value);
      else selectedCategories.delete(e.target.value);
      filterAndRender();
    });
  });
}

// ------------ Filtering Logic ------------
function matchesSearch(dish, q) {
  if (!q) return true;
  const Q = normalize(q);
  if (Q.length === 1)
    return (
      normalize(dish.name).startsWith(Q) ||
      dish.ingredients.some(i => normalize(i.name).startsWith(Q))
    );
  return (
    normalize(dish.name).includes(Q) ||
    dish.ingredients.some(i => normalize(i.name).includes(Q))
  );
}

function matchesCategories(dish) {
  if (selectedCategories.size === 0) return true;
  return Array.from(selectedCategories).some(c => dish.category.includes(c));
}

function filterAndRender() {
  const q = searchQuery.trim();
  const filtered = dishes.filter(
    d => matchesSearch(d, q) && matchesCategories(d)
  );
  renderCards(filtered);
}

// ------------ Search debounce ------------
function handleSearchInput(e) {
  const val = e.target.value;
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    searchQuery = val;
    filterAndRender();
  }, DEBOUNCE_MS);
}

// ------------ Modal ------------
function openModal(id) {
  const d = dishes.find(x => x.id === id);
  if (!d) return;
  modalBody.innerHTML = `
    <div class="modal-body">
      <h2>${d.name}</h2>
      <p class="muted">${d.category.join(', ')} — ${d.description}</p>
      <img src="${d.image}" alt="${d.name}">
      <h4>Nguyên liệu</h4>
      <ul>${d.ingredients.map(i => `<li>${i.name} — ${i.amount}</li>`).join('')}</ul>
      <h4>Các bước</h4>
      <ol>${d.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <p><strong>Lưu ý:</strong> ${d.notes}</p>
      <div class="video-wrapper">
        ${d.video}
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  modalBody.innerHTML = '';
  document.body.style.overflow = '';
}

// ------------ Theme ------------
const toggle = document.getElementById('modeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

// ------------ Init ------------
function init() {
  renderCategoryCheckboxes();
  renderCards(dishes);
  searchInput.addEventListener('input', handleSearchInput);
  modalOverlay.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });
  yearSpan.textContent = new Date().getFullYear();
}

init();
