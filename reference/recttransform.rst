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
|                                     :ref:`Vector4<api_Vector4>` | :ref:`border<api_RectTransform_053d1a9e>` () const                                               |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>` | :ref:`horizontalPolicy<api_RectTransform_29fb1c36>` () const                                     |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                       :ref:`RectTransform<api_RectTransform>` * | :ref:`hoveredTransform<api_RectTransform_5ba36e27>` (float  x, float  y)                         |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            bool | :ref:`isHovered<api_RectTransform_79fb12ad>` (float  x, float  y) const                          |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Layout<api_Layout>` * | :ref:`layout<api_RectTransform_48acd97e>` () const                                               |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`mapFromGlobal<api_RectTransform_563ad1bc>` (float  x, float  y)                            |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`margin<api_RectTransform_3197b0ef>` () const                                               |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`maxAnchors<api_RectTransform_65f4b37d>` () const                                           |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`minAnchors<api_RectTransform_48cdb162>` () const                                           |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            bool | :ref:`mouseTracking<api_RectTransform_4082b957>` () const                                        |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`padding<api_RectTransform_bfc50968>` () const                                              |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`pivot<api_RectTransform_4e9127fd>` () const                                                |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector4<api_Vector4>` | :ref:`scissorArea<api_RectTransform_fe58624c>` () const                                          |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setAnchors<api_RectTransform_7120349a>` (const Vector2 & minimum, const Vector2 & maximum) |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setBorder<api_RectTransform_5f14d6a8>` (const Vector4 & border)                            |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setEnabled<api_RectTransform_0ad432e1>` (bool  enabled)                                    |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setHorizontalPolicy<api_RectTransform_b2f0a359>` (RectTransform::SizePolicy  policy)       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setLayout<api_RectTransform_387a6d5e>` (Layout * layout)                                   |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMargin<api_RectTransform_9dac1074>` (const Vector4 & margin)                            |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMaxAnchors<api_RectTransform_10ce46d7>` (const Vector2 & anchors)                       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMinAnchors<api_RectTransform_2453f861>` (const Vector2 & anchors)                       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setMouseTracking<api_RectTransform_e1567240>` (bool  tracking)                             |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setPadding<api_RectTransform_249da50c>` (const Vector4 & padding)                          |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setPivot<api_RectTransform_6b5cf2e0>` (const Vector2 & pivot)                              |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setPosition<api_RectTransform_e4a91056>` (const Vector3 & position)                        |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setSize<api_RectTransform_e05c38bf>` (const Vector2 & size)                                |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`setVerticalPolicy<api_RectTransform_ef3d8256>` (RectTransform::SizePolicy  policy)         |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`size<api_RectTransform_d30f125e>` () const                                                 |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Vector2<api_Vector2>` | :ref:`sizeHint<api_RectTransform_8a246173>` () const                                             |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`subscribe<api_RectTransform_5d32489b>` (Widget * widget)                                   |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                                            void | :ref:`unsubscribe<api_RectTransform_f2a1895d>` (Widget * widget)                                 |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|  :ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>` | :ref:`verticalPolicy<api_RectTransform_9be130a4>` () const                                       |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+
|                                     :ref:`Widget<api_Widget>` * | :ref:`widget<api_RectTransform_821d69cb>` ()                                                     |
+-----------------------------------------------------------------+--------------------------------------------------------------------------------------------------+



.. _api_RectTransform_static:

Static Methods
--------------

None

.. _api_RectTransform_methods:

Methods Description
-------------------

.. _api_RectTransform_053d1a9e:

 :ref:`Vector4<api_Vector4>`  **RectTransform::border** () const

Returns the border width of the RectTransform. The Vector4 contains border widths in top, right, bottom and left order.

**See also** setBorder().

----

.. _api_RectTransform_29fb1c36:

 :ref:`RectTransform::SizePolicy<api_RectTransform::SizePolicy>`  **RectTransform::horizontalPolicy** () const

Returns horizontal size policy.

**See also** setHorizontalPolicy().

----

.. _api_RectTransform_5ba36e27:

 :ref:`RectTransform<api_RectTransform>` * **RectTransform::hoveredTransform** (float  *x*, float  *y*)

Returns the most top RectTransform in hierarchy wich contains the point with coodinates *x* and y. Returns null if no bounds.

----

.. _api_RectTransform_79fb12ad:

 bool **RectTransform::isHovered** (float  *x*, float  *y*) const

Returns true if the point with coordinates *x* and *y* is within the bounds, otherwise false.

----

.. _api_RectTransform_48acd97e:

 :ref:`Layout<api_Layout>` * **RectTransform::layout** () const

Returns the layout assigned to the RectTransform.

**See also** setLayout().

----

.. _api_RectTransform_563ad1bc:

 :ref:`Vector2<api_Vector2>`  **RectTransform::mapFromGlobal** (float  *x*, float  *y*)

Translates the global screen *x* and *y* coordinates to widget space.

----

.. _api_RectTransform_3197b0ef:

 :ref:`Vector4<api_Vector4>`  **RectTransform::margin** () const

Returns the margin offsets of the RectTransform. The Vector4 contains offsets in top, right, bottom and left order.

**See also** setMargin().

----

.. _api_RectTransform_65f4b37d:

 :ref:`Vector2<api_Vector2>`  **RectTransform::maxAnchors** () const

Returns the maximum anchors of the RectTransform.

**See also** setMaxAnchors().

----

.. _api_RectTransform_48cdb162:

 :ref:`Vector2<api_Vector2>`  **RectTransform::minAnchors** () const

Returns the minimum anchors of the RectTransform.

**See also** setMinAnchors().

----

.. _api_RectTransform_4082b957:

 bool **RectTransform::mouseTracking** () const

Returns true if this area is interactable with mouse; otherwise returns false. Returns true by the default.

**See also** setMouseTracking().

----

.. _api_RectTransform_bfc50968:

 :ref:`Vector4<api_Vector4>`  **RectTransform::padding** () const

Returns the padding offset of the RectTransform. The Vector4 contains padding offsets in top, right, bottom and left order.

**See also** setPadding().

----

.. _api_RectTransform_4e9127fd:

 :ref:`Vector2<api_Vector2>`  **RectTransform::pivot** () const

Returns the pivot point of the RectTransform.

**See also** setPivot().

----

.. _api_RectTransform_fe58624c:

 :ref:`Vector4<api_Vector4>`  **RectTransform::scissorArea** () const

Returns the internal scissor area. All content outside of this are will not be rendered.

----

.. _api_RectTransform_7120349a:

 void **RectTransform::setAnchors** (:ref:`Vector2<api_Vector2>` & *minimum*, :ref:`Vector2<api_Vector2>` & *maximum*)

Sets both the *minimum* and *maximum* anchors of the RectTransform.

----

.. _api_RectTransform_5f14d6a8:

 void **RectTransform::setBorder** (:ref:`Vector4<api_Vector4>` & *border*)

Sets the top, right, bottom and left *border* width of the RectTransform.

**See also** border().

----

.. _api_RectTransform_0ad432e1:

 void **RectTransform::setEnabled** (bool  *enabled*)

Reimplements: Component::setEnabled(bool enabled).

Sets current state of RectTransform to *enabled* or disabled.

----

.. _api_RectTransform_b2f0a359:

 void **RectTransform::setHorizontalPolicy** (:ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>`  *policy*)

Sets horizontal size policy.

**See also** horizontalPolicy().

----

.. _api_RectTransform_387a6d5e:

 void **RectTransform::setLayout** (:ref:`Layout<api_Layout>` * *layout*)

Sets the *layout* for the RectTransform.

**See also** layout().

----

.. _api_RectTransform_9dac1074:

 void **RectTransform::setMargin** (:ref:`Vector4<api_Vector4>` & *margin*)

Sets the top, right, bottom and left *margin* offsets of the RectTransform.

**See also** margin().

----

.. _api_RectTransform_10ce46d7:

 void **RectTransform::setMaxAnchors** (:ref:`Vector2<api_Vector2>` & *anchors*)

Sets the maximum *anchors* of the RectTransform.

**See also** maxAnchors().

----

.. _api_RectTransform_2453f861:

 void **RectTransform::setMinAnchors** (:ref:`Vector2<api_Vector2>` & *anchors*)

Sets the minimum *anchors* of the RectTransform.

**See also** minAnchors().

----

.. _api_RectTransform_e1567240:

 void **RectTransform::setMouseTracking** (bool  *tracking*)

Sets mouse *tracking* enabled or disabled.

**See also** mouseTracking().

----

.. _api_RectTransform_249da50c:

 void **RectTransform::setPadding** (:ref:`Vector4<api_Vector4>` & *padding*)

Sets the top, right, bottom and left *padding* offsets of the RectTransform.

**See also** padding().

----

.. _api_RectTransform_6b5cf2e0:

 void **RectTransform::setPivot** (:ref:`Vector2<api_Vector2>` & *pivot*)

Sets the *pivot* point of the RectTransform.

**See also** pivot().

----

.. _api_RectTransform_e4a91056:

 void **RectTransform::setPosition** (:ref:`Vector3<api_Vector3>` & *position*)

Reimplements: Transform::setPosition(const Vector3 &position).

Changes *position* of the Transform in local space.

----

.. _api_RectTransform_e05c38bf:

 void **RectTransform::setSize** (:ref:`Vector2<api_Vector2>` & *size*)

Sets the *size* of the RectTransform.

**See also** size().

----

.. _api_RectTransform_ef3d8256:

 void **RectTransform::setVerticalPolicy** (:ref:`RectTransform::SizePolicy<api_RectTransform_SizePolicy>`  *policy*)

Sets vertical size policy.

**See also** verticalPolicy().

----

.. _api_RectTransform_d30f125e:

 :ref:`Vector2<api_Vector2>`  **RectTransform::size** () const

Returns the size of the associated UI element.

**See also** setSize().

----

.. _api_RectTransform_8a246173:

 :ref:`Vector2<api_Vector2>`  **RectTransform::sizeHint** () const

Returns the size recommended to contain all visible content.

----

.. _api_RectTransform_5d32489b:

 void **RectTransform::subscribe** (:ref:`Widget<api_Widget>` * *widget*)

Subscribes a *widget* to changes in the RectTransform.

----

.. _api_RectTransform_f2a1895d:

 void **RectTransform::unsubscribe** (:ref:`Widget<api_Widget>` * *widget*)

Unsubscribes a *widget* from changes in the RectTransform.

----

.. _api_RectTransform_9be130a4:

 :ref:`RectTransform::SizePolicy<api_RectTransform::SizePolicy>`  **RectTransform::verticalPolicy** () const

Returns vertical size policy.

**See also** setVerticalPolicy().

----

.. _api_RectTransform_821d69cb:

 :ref:`Widget<api_Widget>` * **RectTransform::widget** ()

Returns the first widget associated with this rect transform.


