.. _api_RectTransform:

RectTransform
=============

Inherited: :ref:`Transform<api_Transform>`

.. _api_RectTransform_description:

Description
-----------

The ProgressBar class is designed to provide a graphical representation of progress with customizable appearance and range. It supports features such as setting the minimum and maximum values, adjusting the progress value, and specifying visual elements for background and progress indicator.



.. _api_RectTransform_public:

Public Methods
--------------

+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`border<api_RectTransform_46753ab9>` () const                                               |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`clipRegion<api_RectTransform_182c47ea>` () const                                           |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>` | :ref:`horizontalPolicy<api_RectTransform_9ea07cf8>` () const                                     |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Layout<api_Layout>` * | :ref:`layout<api_RectTransform_5b14d769>` () const                                               |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`mapFromGlobal<api_RectTransform_b5f94637>` (float  x, float  y)                            |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`margin<api_RectTransform_be4a81f3>` () const                                               |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`maxAnchors<api_RectTransform_b1d6e90f>` () const                                           |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`minAnchors<api_RectTransform_50a76ec8>` () const                                           |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`padding<api_RectTransform_95f1dcae>` () const                                              |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`pivot<api_RectTransform_16b70f5c>` () const                                                |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setAnchors<api_RectTransform_e0bf1c8a>` (const Vector2 & minimum, const Vector2 & maximum) |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setBorder<api_RectTransform_f39ac85b>` (const Vector4 & border)                            |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setEnabled<api_RectTransform_c30ade21>` (bool  enabled)                                    |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setHorizontalPolicy<api_RectTransform_3e470d9c>` (RectTransform::SizePolicy  policy)       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setLayout<api_RectTransform_0412a897>` (Layout * layout)                                   |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMargin<api_RectTransform_3c8e274a>` (const Vector4 & margin)                            |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMaxAnchors<api_RectTransform_853b0917>` (const Vector2 & anchors)                       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMinAnchors<api_RectTransform_a63d4759>` (const Vector2 & anchors)                       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setPadding<api_RectTransform_051bf967>` (const Vector4 & padding)                          |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setPivot<api_RectTransform_867e15f3>` (const Vector2 & pivot)                              |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setPosition<api_RectTransform_7c029648>` (const Vector3 & position)                        |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setRotation<api_RectTransform_f2c64b8a>` (const Vector3 & angles)                          |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setScale<api_RectTransform_74acfb5d>` (const Vector3 & scale)                              |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setSize<api_RectTransform_a751fb0c>` (const Vector2 & size)                                |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setVerticalPolicy<api_RectTransform_f8a93602>` (RectTransform::SizePolicy  policy)         |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`size<api_RectTransform_d94c3e5f>` () const                                                 |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`sizeHint<api_RectTransform_ec846a05>` () const                                             |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`subscribe<api_RectTransform_f70e894d>` (Widget * widget)                                   |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`unsubscribe<api_RectTransform_ac8519f2>` (Widget * widget)                                 |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>` | :ref:`verticalPolicy<api_RectTransform_0c786b54>` () const                                       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Widget<api_Widget>` * | :ref:`widget<api_RectTransform_13c05ad2>` ()                                                     |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                            std::list<Widget :ref:`*><api_*>>` & | :ref:`widgets<api_RectTransform_6f092e43>` ()                                                    |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+



.. _api_RectTransform_static:

Static Methods
--------------

None

.. _api_RectTransform_methods:

Methods Description
-------------------

.. _api_RectTransform_46753ab9:

 :ref:`Vector4<api_Vector4>`  **RectTransform::border** () const

Returns the border width of the RectTransform. The Vector4 contains border widths in top, right, bottom and left order.

**See also** setBorder().

----

.. _api_RectTransform_182c47ea:

 :ref:`Vector4<api_Vector4>`  **RectTransform::clipRegion** () const

Returns the internal scissor area. All content outside of this are will not be rendered.

----

.. _api_RectTransform_9ea07cf8:

 :ref:`RectTransform::SizePolicy<api_RectTransform::SizePolicy>`  **RectTransform::horizontalPolicy** () const

Returns horizontal size policy.

**See also** setHorizontalPolicy().

----

.. _api_RectTransform_5b14d769:

 :ref:`Layout<api_Layout>` * **RectTransform::layout** () const

Returns the layout assigned to the RectTransform.

**See also** setLayout().

----

.. _api_RectTransform_b5f94637:

 :ref:`Vector2<api_Vector2>`  **RectTransform::mapFromGlobal** (float  *x*, float  *y*)

Translates the global screen *x* and *y* coordinates to widget space.

----

.. _api_RectTransform_be4a81f3:

 :ref:`Vector4<api_Vector4>`  **RectTransform::margin** () const

Returns the margin offsets of the RectTransform. The Vector4 contains offsets in top, right, bottom and left order.

**See also** setMargin().

----

.. _api_RectTransform_b1d6e90f:

 :ref:`Vector2<api_Vector2>`  **RectTransform::maxAnchors** () const

Returns the maximum anchors of the RectTransform.

**See also** setMaxAnchors().

----

.. _api_RectTransform_50a76ec8:

 :ref:`Vector2<api_Vector2>`  **RectTransform::minAnchors** () const

Returns the minimum anchors of the RectTransform.

**See also** setMinAnchors().

----

.. _api_RectTransform_95f1dcae:

 :ref:`Vector4<api_Vector4>`  **RectTransform::padding** () const

Returns the padding offset of the RectTransform. The Vector4 contains padding offsets in top, right, bottom and left order.

**See also** setPadding().

----

.. _api_RectTransform_16b70f5c:

 :ref:`Vector2<api_Vector2>`  **RectTransform::pivot** () const

Returns the pivot point of the RectTransform.

**See also** setPivot().

----

.. _api_RectTransform_e0bf1c8a:

 void **RectTransform::setAnchors** (:ref:`Vector2<api_Vector2>` & *minimum*, :ref:`Vector2<api_Vector2>` & *maximum*)

Sets both the *minimum* and *maximum* anchors of the RectTransform.

----

.. _api_RectTransform_f39ac85b:

 void **RectTransform::setBorder** (:ref:`Vector4<api_Vector4>` & *border*)

Sets the top, right, bottom and left *border* width of the RectTransform.

**See also** border().

----

.. _api_RectTransform_c30ade21:

 void **RectTransform::setEnabled** (bool  *enabled*)

Reimplements: Component::setEnabled(bool enabled).

Sets current state of RectTransform to *enabled* or disabled.

----

.. _api_RectTransform_3e470d9c:

 void **RectTransform::setHorizontalPolicy** (:ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>`  *policy*)

Sets horizontal size policy.

**See also** horizontalPolicy().

----

.. _api_RectTransform_0412a897:

 void **RectTransform::setLayout** (:ref:`Layout<api_Layout>` * *layout*)

Sets the *layout* for the RectTransform.

**See also** layout().

----

.. _api_RectTransform_3c8e274a:

 void **RectTransform::setMargin** (:ref:`Vector4<api_Vector4>` & *margin*)

Sets the top, right, bottom and left *margin* offsets of the RectTransform.

**See also** margin().

----

.. _api_RectTransform_853b0917:

 void **RectTransform::setMaxAnchors** (:ref:`Vector2<api_Vector2>` & *anchors*)

Sets the maximum *anchors* of the RectTransform.

**See also** maxAnchors().

----

.. _api_RectTransform_a63d4759:

 void **RectTransform::setMinAnchors** (:ref:`Vector2<api_Vector2>` & *anchors*)

Sets the minimum *anchors* of the RectTransform.

**See also** minAnchors().

----

.. _api_RectTransform_051bf967:

 void **RectTransform::setPadding** (:ref:`Vector4<api_Vector4>` & *padding*)

Sets the top, right, bottom and left *padding* offsets of the RectTransform.

**See also** padding().

----

.. _api_RectTransform_867e15f3:

 void **RectTransform::setPivot** (:ref:`Vector2<api_Vector2>` & *pivot*)

Sets the *pivot* point of the RectTransform.

**See also** pivot().

----

.. _api_RectTransform_7c029648:

 void **RectTransform::setPosition** (:ref:`Vector3<api_Vector3>` & *position*)

Reimplements: Transform::setPosition(const Vector3 &position).

Changes *position* of the Transform in local space.

----

.. _api_RectTransform_f2c64b8a:

 void **RectTransform::setRotation** (:ref:`Vector3<api_Vector3>` & *angles*)

Reimplements: Transform::setRotation(const Vector3 &angles).

Changes rotation *angles* of the Transform in local space.

----

.. _api_RectTransform_74acfb5d:

 void **RectTransform::setScale** (:ref:`Vector3<api_Vector3>` & *scale*)

Reimplements: Transform::setScale(const Vector3 &scale).

Changes *scale* of the Transform in local space.

----

.. _api_RectTransform_a751fb0c:

 void **RectTransform::setSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets the *size* of the RectTransform.

**See also** size().

----

.. _api_RectTransform_f8a93602:

 void **RectTransform::setVerticalPolicy** (:ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>`  *policy*)

Sets vertical size policy.

**See also** verticalPolicy().

----

.. _api_RectTransform_d94c3e5f:

 :ref:`Vector2<api_Vector2>`  **RectTransform::size** () const

Returns the size of the associated UI element.

**See also** setSize().

----

.. _api_RectTransform_ec846a05:

 :ref:`Vector2<api_Vector2>`  **RectTransform::sizeHint** () const

Returns the size recommended to contain all visible content.

----

.. _api_RectTransform_f70e894d:

 void **RectTransform::subscribe** (:ref:`Widget<api_Widget>` * *widget*)

Subscribes a *widget* to changes in the RectTransform.

----

.. _api_RectTransform_ac8519f2:

 void **RectTransform::unsubscribe** (:ref:`Widget<api_Widget>` * *widget*)

Unsubscribes a *widget* from changes in the RectTransform.

----

.. _api_RectTransform_0c786b54:

 :ref:`RectTransform::SizePolicy<api_RectTransform::SizePolicy>`  **RectTransform::verticalPolicy** () const

Returns vertical size policy.

**See also** setVerticalPolicy().

----

.. _api_RectTransform_13c05ad2:

 :ref:`Widget<api_Widget>` * **RectTransform::widget** ()

Returns the first widget associated with this rect transform.

----

.. _api_RectTransform_6f092e43:

std::list<Widget :ref:`*><api_*>>` & **RectTransform::widgets** ()

Returns a list of widgets associated with this rect transform


