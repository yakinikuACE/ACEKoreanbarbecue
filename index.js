function switchSectionHeader() {
    var section2 = document.getElementById('section2');
    var text1 = document.getElementById('menu-button');
    var text2 = document.getElementById('close-button');

    // Toggle the 'hidden' class to switch the visibility
    text1.classList.toggle('hidden');
    text2.classList.toggle('hidden');

    if (section2.style.display === 'none' || section2.style.display === '') {
        section2.style.display = 'block';
        section2.classList.add('showWithAnimation');
        section2.classList.remove('hideWithAnimation');
    } else {
        section2.classList.remove('showWithAnimation');
        section2.classList.add('hideWithAnimation');
        setTimeout(function () {
            section2.style.display = 'none';
        }, 200); // 0.2秒後にdisplayをnoneに設定
    }
}

function switchSectionMenu() {
    var section2 = document.getElementById('section2');
    var text1 = document.getElementById('menu-button');
    var text2 = document.getElementById('close-button');

    // ハンバーガー変化
    $(".openbtn1").toggleClass('active');

    // Toggle the 'hidden' class to switch the visibility
    text1.classList.toggle('hidden');
    text2.classList.toggle('hidden');

    section2.classList.add('hideWithAnimation');
    setTimeout(function () {
        section2.style.display = 'none';
    }, 200); // 0.2秒後にdisplayをnoneに設定

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("メニュー");

    // その要素へスクロール
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function switchSectionStoreInformation() {
    var section2 = document.getElementById('section2');

    var text1 = document.getElementById('menu-button');
    var text2 = document.getElementById('close-button');

    // ハンバーガー変化
    $(".openbtn1").toggleClass('active');

    // Toggle the 'hidden' class to switch the visibility
    text1.classList.toggle('hidden');
    text2.classList.toggle('hidden');

    section2.classList.add('hideWithAnimation');
    setTimeout(function () {
        section2.style.display = 'none';
    }, 200); // 0.2秒後にdisplayをnoneに設定

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("StoreInformation");

    // その要素へスクロール
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function switchSectionDetailedInformation() {
    var section2 = document.getElementById('section2');
    var text1 = document.getElementById('menu-button');
    var text2 = document.getElementById('close-button');

    // ハンバーガー変化
    $(".openbtn1").toggleClass('active');

    // Toggle the 'hidden' class to switch the visibility
    text1.classList.toggle('hidden');
    text2.classList.toggle('hidden');


    section2.classList.add('hideWithAnimation');
    setTimeout(function () {
        section2.style.display = 'none';
    }, 200); // 0.2秒後にdisplayをnoneに設定

    // ID 'StoreInformation' を持つ要素を取得
    var element = document.getElementById("DetailedInformation");

    // その要素へスクロール
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}


// コースbutton
function switchSectionCourse() {
    switchCourseButton()

    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    var course = document.getElementById('course');
    var single = document.getElementById('single');

    var coursePushChr = document.getElementById('coursePushChr');
    var coursePushedChr = document.getElementById('coursePushedChr');
    var singlePushChr = document.getElementById('singlePushChr');
    var singlePushedChr = document.getElementById('singlePushedChr');

    course.classList.toggle('chr-expanded');
    console.log(course.classList);

    if (course.classList.contains('chr-expanded')) {
        coursePushChr.style.display = 'none';
        coursePushedChr.style.display = 'block';
    } else {
        coursePushChr.style.display = 'block';
        coursePushedChr.style.display = 'none';
    }

    if (single.classList.contains('chr-expanded')) {
        single.classList.toggle('chr-expanded');
        switchSingleButton();
        singlePushChr.style.display = 'block';
        singlePushedChr.style.display = 'none';
    }

    // var courseImage = document.getElementById('course-image');
    // var singleImage = document.getElementById('single-image');

    // courseImage.classList.toggle('img-rotation');

    // if (singleImage.classList.contains('img-rotation')) {
    //     singleImage.classList.toggle('img-rotation');
    // }


    if (section4.style.display === 'block') {
        section4.style.display = 'none';
    }

    if (section3.style.display === 'none') {
        section3.style.display = 'block';
        section3.classList.add('showWithAnimation');
    } else {
        section3.style.display = 'none';
        section3.classList.remove('showWithAnimation');
    }
}

function switchCourseButton() {
    var courseButton = document.getElementById('courseButton');
    var coursePush = document.getElementById('coursePush');
    var courseShadow = document.getElementById('courseShadow');

    courseButton.classList.toggle('course-button-pushed');
    coursePush.classList.toggle('course-push-pushed');
    courseShadow.classList.toggle('course-shadow-pushed');

}

function switchSectionSingle() {
    switchSingleButton()

    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    var course = document.getElementById('course');
    var single = document.getElementById('single');

    var coursePushChr = document.getElementById('coursePushChr');
    var coursePushedChr = document.getElementById('coursePushedChr');
    var singlePushChr = document.getElementById('singlePushChr');
    var singlePushedChr = document.getElementById('singlePushedChr');

    single.classList.toggle('chr-expanded');

    if (single.classList.contains('chr-expanded')) {
        singlePushChr.style.display = 'none';
        singlePushedChr.style.display = 'block';
    } else {
        singlePushChr.style.display = 'block';
        singlePushedChr.style.display = 'none';
    }

    if (course.classList.contains('chr-expanded')) {
        course.classList.toggle('chr-expanded');
        switchCourseButton();
        coursePushChr.style.display = 'block';
        coursePushedChr.style.display = 'none';
    }

    // var courseImage = document.getElementById('course-image');
    // var singleImage = document.getElementById('single-image');

    // singleImage.classList.toggle('img-rotation');

    // if (courseImage.classList.contains('img-rotation')) {
    //     courseImage.classList.toggle('img-rotation');
    // }

    if (section3.style.display === 'block') {
        section3.style.display = 'none';
    }

    if (section4.style.display === 'none') {
        section4.style.display = 'block';
        section4.classList.add('showWithAnimation');
    } else {
        section4.style.display = 'none';
        section4.classList.remove('showWithAnimation');
    }
}

function switchSingleButton() {
    var singleButton = document.getElementById('singleButton');
    var singlePush = document.getElementById('singlePush');
    var singleShadow = document.getElementById('singleShadow');

    singleButton.classList.toggle('single-button-pushed');
    singlePush.classList.toggle('single-push-pushed');
    singleShadow.classList.toggle('single-shadow-pushed');

}

document.addEventListener('DOMContentLoaded', function () {
    // ロゴ要素を正しく取得していることを確認
    var logo = document.getElementById('logo');
    if (!logo) {
        console.error('ロゴ要素が見つかりません。IDを確認してください。');
        return; // ロゴ要素がない場合、ここで処理を終了
    }

    // トランジションが終了したことを検知
    logo.addEventListener('transitionend', function (event) {
        // トランジションが完了したプロパティがfilterであることを確認
        if (event.propertyName === 'filter') {
            // トランジションが完了したらスプラッシュ画面を非表示にする
            var splashScreen = document.getElementById('splash-screen');
            if (splashScreen) {
                splashScreen.style.display = 'none';
            } else {
                console.error('スプラッシュ画面の要素が見つかりません。IDを確認してください。');
            }
        }
    });

    // 一定時間後に彩度を上げる
    setTimeout(function () {
        logo.style.filter = 'saturate(1)';
        // Loadingテキストのアニメーションを開始
        var loadingText = document.getElementById('loading-text');
        if (loadingText) {
            loadingText.style.animation = 'wave-animation 2s infinite';
        } else {
            console.error('Loadingテキスト要素が見つかりません。IDを確認してください。');
        }
    }, 1000);
});


// ハンバーガーアニメーション
$(".openbtn1").click(function () {
    $(this).toggleClass('active');
});


// スライダー
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: "fade",

    // Speed of the transition animation (in milliseconds)
    speed: 1000,

    // Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});

// タップでも移り変わるように関数追加
function swiping() {
    swiper.slideNext();
}

// スライダー
const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: "fade",

    // Speed of the transition animation (in milliseconds)
    speed: 1000,

    // Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});

// タップでも移り変わるように関数追加
function swiping2() {
    swiper2.slideNext();
}

const swiper3 = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    effect: "fade",

    // Speed of the transition animation (in milliseconds)
    speed: 1000,

    // Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});




// インスタフッタ
function switchSectionContactChat() {
    window.location.href = "https://www.instagram.com/yakiniku_ace_hiroki/";
}

document.getElementById('callButton').addEventListener('click', function () {
    window.location.href = 'tel:050-5494-5008';
});



// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
            // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('fadeUp');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });
} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime2() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger2').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp2');
            // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('fadeUp2');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });
} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime2(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 動きのきっかけとなるアニメーションの名前を定義
function lineAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.lineTrigger').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('line');
            // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('line');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });
} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    lineAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 動きのきっかけとなるアニメーションの名前を定義
function lineAnime2() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.lineTrigger2').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('line2');
            // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('line2');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });
} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    lineAnime2(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// スクロール位置の調整
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // デフォルトのアンカー動作をキャンセル
      const href = this.getAttribute('href'); // クリックされたリンクのhref属性を取得
      const offsetTop = document.querySelector(href).offsetTop; // ターゲットのトップ位置を取得
  
      // スクロール先の位置を調整する。例えば、ナビゲーションバーの高さが50pxの場合、50px分オフセットを減らす
      window.scrollTo({
        top: offsetTop - 200, // オフセット位置を調整
        behavior: 'smooth' // スムーズスクロールを指定
      });
    });
  });

//  // ボタン1にクリックイベントリスナーを追加
//  document.getElementById('button1').addEventListener('click', function() {
//     // コンテンツ1を表示し、コンテンツ2を隠す
//     document.getElementById('content1').classList.remove('hidden'); // hiddenクラスを取り除く
//     document.getElementById('content2').classList.add('hidden'); // hiddenクラスを追加
//   });

//   // ボタン2にクリックイベントリスナーを追加
//   document.getElementById('button2').addEventListener('click', function() {
//     // コンテンツ2を表示し、コンテンツ1を隠す
//     document.getElementById('content1').classList.add('hidden'); // hiddenクラスを追加
//     document.getElementById('content2').classList.remove('hidden'); // hiddenクラスを取り除く
//   });

 // コンテンツの表示状態を切り替える関数
function toggleDisplay(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }
  
  // ボタン1のクリックイベント
  document.getElementById('button1').addEventListener('click', function() {
    // コンテンツ2が表示されている場合、それを非表示にする
    if (document.getElementById('content2').style.display === "block") {
      document.getElementById('content2').style.display = "none";
    }
    // コンテンツ1の表示状態を切り替える
    toggleDisplay('content1');
  });
  
  // ボタン2のクリックイベント
  document.getElementById('button2').addEventListener('click', function() {
    // コンテンツ1が表示されている場合、それを非表示にする
    if (document.getElementById('content1').style.display === "block") {
      document.getElementById('content1').style.display = "none";
    }
    // コンテンツ2の表示状態を切り替える
    toggleDisplay('content2');
  });
  

// // コースメニューの非表示の設定

// var clickableElement = document.getElementById('clickableElement');
// var content = document.getElementById('hiddenContent');

// // clickableElementのクリックイベントリスナーを設定
// clickableElement.addEventListener('click', function() {
//     // contentのdisplayプロパティを確認し、切り替える
//     if (content.style.display === 'none') {
//         content.style.display = 'block';
//     } else {
//         content.style.display = 'none';
//     }
// });

// console.log(document);
// console.log(document.getElementById('clickableElement'));




// スマートフォンでのみ実行されるアニメーション

// document.addEventListener("DOMContentLoaded", function() {
//     const shopPhoto = document.querySelector('.shop-photo img');
//     const shopPhotoText = document.querySelector('.shop-photo-text');

//     shopPhoto.addEventListener('mouseover', function() {
//         this.style.animation = 'shop-photo 3s ease-out forwards';

//         // shop-photo アニメーション後に floatUp アニメーションを開始
//         setTimeout(() => {
//             shopPhotoText.style.animation = 'floatUp 2s ease-out forwards';
//         }, 500); // 5000ms = 5s, shop-photo アニメーションの時間
//     });
// });


// // 店舗写真のアニメーション
// document.addEventListener("DOMContentLoaded", function() {
//     const shopPhoto = document.querySelector('.shop-photo img');
//     const shopPhotoText = document.querySelector('.shop-photo-text');

//     // ホバー時のアニメーション開始
//     shopPhoto.addEventListener('mouseover', function() {
//         // アニメーションを開始する前に、既にアニメーションが設定されているかチェック
//         if (!this.style.animation || this.style.animationName === 'none') {
//             this.style.animation = 'shop-photo 0.5s cubic-bezier(0, 0, 0.58, 1.0) forwards';
//             setTimeout(() => {
//                 shopPhotoText.style.animation = 'floatUp 2s ease-out forwards';
//             }, 2000); // 5秒後にshop-photo-textのアニメーションを開始
//         }
//     });

//     // スクロールイベントでアニメーション状態をリセット
//     window.addEventListener('scroll', function() {
//         const photoPosition = shopPhoto.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;

//         // 要素がビューポート外にあるかチェック
//         if (photoPosition < 0 || photoPosition > windowHeight) {
//             // アニメーションをリセット
//             shopPhoto.style.animation = 'none';
//             shopPhotoText.style.animation = 'none';
//         }
//     });
// });

// // シャトーブリアン
// document.addEventListener("DOMContentLoaded", function() {
//     const syatoburian = document.querySelector('.syato-burian img');
//     const syatoburiantext = document.querySelector('.syato-burian-text');

//     // ホバー時のアニメーション開始
//     syatoburian.addEventListener('mouseover', function() {
//         // アニメーションを開始する前に、既にアニメーションが設定されているかチェック
//         if (!this.style.animation || this.style.animationName === 'none') {
//             this.style.animation = 'syato-burian 3s ease-out forwards';
//             setTimeout(() => {
//                 syatoburiantext.style.animation = 'floatUp 2s ease-out forwards';
//             }, 2000); // 5秒後にshop-photo-textのアニメーションを開始
//         }
        
//     });

//     // スクロールイベントでアニメーション状態をリセット
//     window.addEventListener('scroll', function() {
//         const photoPosition = syatoburian.getBoundingClientRect().bottom;
//         const windowHeight = window.innerHeight;

//         // 要素がビューポート外にあるかチェック
//         if (photoPosition < 0 || photoPosition > windowHeight) {
//             // アニメーションをリセット
//             syatoburian.style.animation = 'none';
//             syatoburiantext.style.animation = 'none';
//         }
//     });
// });




