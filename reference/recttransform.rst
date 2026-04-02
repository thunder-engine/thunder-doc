.. _api_RectTransform:

RectTransform
=============

Inherited: None

.. _api_RectTransform_description:

Description
-----------

The ProgressBar class is designed to provide a graphical representation of progress with customizable appearance and range. It supports features such as setting the minimum and maximum values, adjusting the progress value, and specifying visual elements for background and progress indicator.



.. _api_RectTransform_public:

Public Methods
--------------

+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`border<api_RectTransform_f6c30845>` () const                                               |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>` | :ref:`horizontalPolicy<api_RectTransform_c1fb6a78>` () const                                     |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                       :ref:`RectTransform<api_RectTransform>` * | :ref:`hoveredTransform<api_RectTransform_938efc40>` (float  x, float  y)                         |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            bool | :ref:`isHovered<api_RectTransform_629ce45b>` (float  x, float  y) const                          |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Layout<api_Layout>` * | :ref:`layout<api_RectTransform_ead91358>` () const                                               |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`mapFromGlobal<api_RectTransform_c2fe0498>` (float  x, float  y)                            |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`margin<api_RectTransform_4f8297a0>` () const                                               |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`maxAnchors<api_RectTransform_b3fca8e2>` () const                                           |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`minAnchors<api_RectTransform_1db46c20>` () const                                           |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            bool | :ref:`mouseTracking<api_RectTransform_84b2efd5>` () const                                        |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`padding<api_RectTransform_85743c90>` () const                                              |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`pivot<api_RectTransform_ca21f05e>` () const                                                |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`scissorArea<api_RectTransform_671932f0>` () const                                          |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setAnchors<api_RectTransform_305b9e2a>` (const Vector2 & minimum, const Vector2 & maximum) |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setBorder<api_RectTransform_78f4ea60>` (const Vector4 & border)                            |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setEnabled<api_RectTransform_3b761cde>` (bool  enabled)                                    |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setHorizontalPolicy<api_RectTransform_786df3b5>` (RectTransform::SizePolicy  policy)       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setLayout<api_RectTransform_6ed5c01f>` (Layout * layout)                                   |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMargin<api_RectTransform_f7edc58a>` (const Vector4 & margin)                            |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMaxAnchors<api_RectTransform_3db2fa09>` (const Vector2 & anchors)                       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMinAnchors<api_RectTransform_ed201345>` (const Vector2 & anchors)                       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMouseTracking<api_RectTransform_8ed56f2c>` (bool  tracking)                             |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setPadding<api_RectTransform_65b3042e>` (const Vector4 & padding)                          |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setPivot<api_RectTransform_b3cf682e>` (const Vector2 & pivot)                              |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setPosition<api_RectTransform_5304dcef>` (const Vector3 & position)                        |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setSize<api_RectTransform_687d42ab>` (const Vector2 & size)                                |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setVerticalPolicy<api_RectTransform_7c48dbf6>` (RectTransform::SizePolicy  policy)         |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`size<api_RectTransform_d3a854b7>` () const                                                 |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`sizeHint<api_RectTransform_96ae2784>` () const                                             |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`subscribe<api_RectTransform_4f013a7d>` (Widget * widget)                                   |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`unsubscribe<api_RectTransform_41ceadf0>` (Widget * widget)                                 |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>` | :ref:`verticalPolicy<api_RectTransform_bc289105>` () const                                       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Widget<api_Widget>` * | :ref:`widget<api_RectTransform_9b8ae673>` ()                                                     |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+



.. _api_RectTransform_static:

Static Methods
--------------

None

.. _api_RectTransform_methods:

Methods Description
-------------------

.. _api_RectTransform_f6c30845:

 :ref:`Vector4<api_Vector4>`  **RectTransform::border** () const

Returns the border width of the RectTransform. The Vector4 contains border widths in top, right, bottom and left order.

**See also** setBorder().

----

.. _api_RectTransform_c1fb6a78:

 :ref:`RectTransform::SizePolicy<api_RectTransform::SizePolicy>`  **RectTransform::horizontalPolicy** () const

Returns horizontal size policy.

**See also** setHorizontalPolicy().

----

.. _api_RectTransform_938efc40:

 :ref:`RectTransform<api_RectTransform>` * **RectTransform::hoveredTransform** (float  *x*, float  *y*)

Returns the most top RectTransform in hierarchy wich contains the point with coodinates *x* and y. Returns null if no bounds.

----

.. _api_RectTransform_629ce45b:

 bool **RectTransform::isHovered** (float  *x*, float  *y*) const

Returns true if the point with coordinates *x* and *y* is within the bounds, otherwise false.

----

.. _api_RectTransform_ead91358:

 :ref:`Layout<api_Layout>` * **RectTransform::layout** () const

Returns the layout assigned to the RectTransform.

**See also** setLayout().

----

.. _api_RectTransform_c2fe0498:

 :ref:`Vector2<api_Vector2>`  **RectTransform::mapFromGlobal** (float  *x*, float  *y*)

Translates the global screen *x* and *y* coordinates to widget space.

----

.. _api_RectTransform_4f8297a0:

 :ref:`Vector4<api_Vector4>`  **RectTransform::margin** () const

Returns the margin offsets of the RectTransform. The Vector4 contains offsets in top, right, bottom and left order.

**See also** setMargin().

----

.. _api_RectTransform_b3fca8e2:

 :ref:`Vector2<api_Vector2>`  **RectTransform::maxAnchors** () const

Returns the maximum anchors of the RectTransform.

**See also** setMaxAnchors().

----

.. _api_RectTransform_1db46c20:

 :ref:`Vector2<api_Vector2>`  **RectTransform::minAnchors** () const

Returns the minimum anchors of the RectTransform.

**See also** setMinAnchors().

----

.. _api_RectTransform_84b2efd5:

 bool **RectTransform::mouseTracking** () const

Returns true if this area is interactable with mouse; otherwise returns false. Returns true by the default.

**See also** setMouseTracking().

----

.. _api_RectTransform_85743c90:

 :ref:`Vector4<api_Vector4>`  **RectTransform::padding** () const

Returns the padding offset of the RectTransform. The Vector4 contains padding offsets in top, right, bottom and left order.

**See also** setPadding().

----

.. _api_RectTransform_ca21f05e:

 :ref:`Vector2<api_Vector2>`  **RectTransform::pivot** () const

Returns the pivot point of the RectTransform.

**See also** setPivot().

----

.. _api_RectTransform_671932f0:

 :ref:`Vector4<api_Vector4>`  **RectTransform::scissorArea** () const

Returns the internal scissor area. All content outside of this are will not be rendered.

----

.. _api_RectTransform_305b9e2a:

 void **RectTransform::setAnchors** (:ref:`Vector2<api_Vector2>` & *minimum*, :ref:`Vector2<api_Vector2>` & *maximum*)

Sets both the *minimum* and *maximum* anchors of the RectTransform.

----

.. _api_RectTransform_78f4ea60:

 void **RectTransform::setBorder** (:ref:`Vector4<api_Vector4>` & *border*)

Sets the top, right, bottom and left *border* width of the RectTransform.

**See also** border().

----

.. _api_RectTransform_3b761cde:

 void **RectTransform::setEnabled** (bool  *enabled*)

Reimplements: Component::setEnabled(bool enabled).

Sets current state of RectTransform to *enabled* or disabled.

----

.. _api_RectTransform_786df3b5:

 void **RectTransform::setHorizontalPolicy** (:ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>`  *policy*)

Sets horizontal size policy.

**See also** horizontalPolicy().

----

.. _api_RectTransform_6ed5c01f:

 void **RectTransform::setLayout** (:ref:`Layout<api_Layout>` * *layout*)

Sets the *layout* for the RectTransform.

**See also** layout().

----

.. _api_RectTransform_f7edc58a:

 void **RectTransform::setMargin** (:ref:`Vector4<api_Vector4>` & *margin*)

Sets the top, right, bottom and left *margin* offsets of the RectTransform.

**See also** margin().

----

.. _api_RectTransform_3db2fa09:

 void **RectTransform::setMaxAnchors** (:ref:`Vector2<api_Vector2>` & *anchors*)

Sets the maximum *anchors* of the RectTransform.

**See also** maxAnchors().

----

.. _api_RectTransform_ed201345:

 void **RectTransform::setMinAnchors** (:ref:`Vector2<api_Vector2>` & *anchors*)

Sets the minimum *anchors* of the RectTransform.

**See also** minAnchors().

----

.. _api_RectTransform_8ed56f2c:

 void **RectTransform::setMouseTracking** (bool  *tracking*)

Sets mouse *tracking* enabled or disabled.

**See also** mouseTracking().

----

.. _api_RectTransform_65b3042e:

 void **RectTransform::setPadding** (:ref:`Vector4<api_Vector4>` & *padding*)

Sets the top, right, bottom and left *padding* offsets of the RectTransform.

**See also** padding().

----

.. _api_RectTransform_b3cf682e:

 void **RectTransform::setPivot** (:ref:`Vector2<api_Vector2>` & *pivot*)

Sets the *pivot* point of the RectTransform.

**See also** pivot().

----

.. _api_RectTransform_5304dcef:

 void **RectTransform::setPosition** (:ref:`Vector3<api_Vector3>` & *position*)

Reimplements: Transform::setPosition(const Vector3 &position).

Changes *position* of the Transform in local space.

----

.. _api_RectTransform_687d42ab:

 void **RectTransform::setSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets the *size* of the RectTransform.

**See also** size().

----

.. _api_RectTransform_7c48dbf6:

 void **RectTransform::setVerticalPolicy** (:ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>`  *policy*)

Sets vertical size policy.

**See also** verticalPolicy().

----

.. _api_RectTransform_d3a854b7:

 :ref:`Vector2<api_Vector2>`  **RectTransform::size** () const

Returns the size of the associated UI element.

**See also** setSize().

----

.. _api_RectTransform_96ae2784:

 :ref:`Vector2<api_Vector2>`  **RectTransform::sizeHint** () const

Returns the size recommended to contain all visible content.

----

.. _api_RectTransform_4f013a7d:

 void **RectTransform::subscribe** (:ref:`Widget<api_Widget>` * *widget*)

Subscribes a *widget* to changes in the RectTransform.

----

.. _api_RectTransform_41ceadf0:

 void **RectTransform::unsubscribe** (:ref:`Widget<api_Widget>` * *widget*)

Unsubscribes a *widget* from changes in the RectTransform.

----

.. _api_RectTransform_bc289105:

 :ref:`RectTransform::SizePolicy<api_RectTransform::SizePolicy>`  **RectTransform::verticalPolicy** () const

Returns vertical size policy.

**See also** setVerticalPolicy().

----

.. _api_RectTransform_9b8ae673:

 :ref:`Widget<api_Widget>` * **RectTransform::widget** ()

Returns the first widget associated with this rect transform.


