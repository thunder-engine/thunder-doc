.. _api_Spline:

Spline
======

Inherited: None

.. _api_Spline_description:

Description
-----------



.. _api_Spline_public:

Public Methods
--------------

+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    bool | :ref:`closed<api_Spline_52b913e8>` () const                                       |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`insertPoint<api_Spline_482901bc>` (int  index, const Spline::Point & point) |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Spline::Point<api_Spline_Point>` | :ref:`point<api_Spline_db06973c>` (int  index) const                              |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                     int | :ref:`pointsCount<api_Spline_7eaf306b>` () const                                  |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`removePoint<api_Spline_d356c8b1>` (int  index)                              |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`setClosed<api_Spline_6c4efa50>` (bool  closed)                              |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`setPoint<api_Spline_e751fcd9>` (int  index, const Spline::Point & point)    |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|             :ref:`Vector3<api_Vector3>` | :ref:`value<api_Spline_a073ec29>` (float  position)                               |
+-----------------------------------------+-----------------------------------------------------------------------------------+



.. _api_Spline_static:

Static Methods
--------------

None

.. _api_Spline_methods:

Methods Description
-------------------

.. _api_Spline_52b913e8:

 bool **Spline::closed** () const

Returns true if is the spline is closed; otherwise false.

**See also** setClosed().

----

.. _api_Spline_482901bc:

 void **Spline::insertPoint** (int  *index*, :ref:`Spline::Point<api_Spline::Point>` & *point*)

Inserts a *point* at the given *index*.

----

.. _api_Spline_db06973c:

 :ref:`Spline::Point<api_Spline::Point>`  **Spline::point** (int  *index*) const

Returns the point at the given *index*.

**See also** setPoint().

----

.. _api_Spline_7eaf306b:

 int **Spline::pointsCount** () const

Returns the number of points in the spline.

----

.. _api_Spline_d356c8b1:

 void **Spline::removePoint** (int  *index*)

Removes the point at the given *index*.

----

.. _api_Spline_6c4efa50:

 void **Spline::setClosed** (bool  *closed*)

Sets whether the spline is *closed*.

**See also** *closed*().

----

.. _api_Spline_e751fcd9:

 void **Spline::setPoint** (int  *index*, :ref:`Spline::Point<api_Spline::Point>` & *point*)

Sets the *point* at the given *index*.

**See also** *point*().

----

.. _api_Spline_a073ec29:

 :ref:`Vector3<api_Vector3>`  **Spline::value** (float  *position*)

Returns the value of the spline at the given normalized *position*.


